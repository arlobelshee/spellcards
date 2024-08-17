import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import console from "node:console";

const AtHigherLevels = "MARKER_AT_HIGHER_LEVELS";
type DestSpell = {
	id: string;
	name: string;
	name_short?: string;
	description: { short: string; base: string; upcast?: string; cantrip?: string };
};
type AllSpellsFileContents = { version: number; kind: "spell-list"; spells: Record<string, DestSpell> };
type SpellFilterFileContents = {
	version: number;
	kind: "character" | "source" | "class";
	spells: Record<string, DestSpell>;
};

async function import_everything(args: string[]) {
	if (args.length !== 2) {
		console.error("Expected 2 args: a source file and the destination folder.");
		return;
	}
	const dest_folder = args[1];
	const script = await fs.readFile(args[0], { encoding: "utf8" });
	const input = get_interesting_raw_data(script);
	await merge_into_spells_data(input, path.join(dest_folder, "all_spells.json"));
	console.log("Import complete.");
}

type SourceSpell = {
	description: string;
	descriptionFull?: string;
	descriptionCantripDie?: string;
	source: [string, number] | [string, number][];
	defaultExcluded?: boolean;
	classes: string[];
} & Record<string, unknown>;
const KeysToKeepUnaltered = [
	["name", "name"],
	["level", "level"],
	["school", "school"],
	["nameShort", "name_short"],
];
type ImportedSpell = Omit<DestSpell, "id" | "description">;

async function merge_into_spells_data(input: { spells: Record<string, SourceSpell>; sources: {} }, dest_path: string) {
	let dest_data: AllSpellsFileContents = JSON.parse(await fs.readFile(dest_path, { encoding: "utf8" }));
	if (!dest_data || dest_data.kind !== "spell-list" || dest_data.version !== 1) {
		console.log("Invalid data found in", dest_path, "re-initializing it.");
		dest_data = { version: 1, kind: "spell-list", spells: {} };
	}
	for (const new_spell of Object.entries(input.spells)) {
		warn_if_exists("spell", dest_data.spells, new_spell[0]);
		const [desc_base, desc_higher_levels] = new_spell[1].descriptionFull.split(AtHigherLevels, 2);
		const imported_spell = {
			...(Object.fromEntries(KeysToKeepUnaltered.map((key) => [key[1], new_spell[1][key[0]]])) as ImportedSpell),
			id: new_spell[0],
			description: {
				short: new_spell[1].description,
				base: desc_base.trim(),
				upcast: desc_higher_levels?.trim(),
				cantrip: new_spell[1].descriptionCantripDie,
			},
		};
		dest_data.spells[new_spell[0]] = imported_spell;
	}

	await fs.writeFile(dest_path, JSON.stringify(dest_data, undefined, "\t"));
}

function warn_if_exists(kind: string, data: Record<string, unknown>, id: string) {
	if (Object.prototype.hasOwnProperty.call(data, id)) {
		console.log(`WARNING: replacing ${kind} with ID ${id}`);
	}
}

function get_interesting_raw_data(script: string) {
	const results = { spells: {}, sources: {} };
	const other = { sheetVersion: 13001014, RequiredSheetVersion() {} };
	Function(
		"sheetVersion",
		"RequiredSheetVersion",
		"SpellsList",
		"SourceList",
		"AtHigherLevels",
		`"use strict";${script}`,
	)(other.sheetVersion, other.RequiredSheetVersion, results.spells, results.sources, AtHigherLevels);
	return results;
}

await import_everything(process.argv.slice(2));
