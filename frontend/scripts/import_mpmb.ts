import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import console from "node:console";

const AtHigherLevels = "MARKER_AT_HIGHER_LEVELS";
type DestSpell = {
	id: string;
	name: string;
	name_short: string;
	range: string;
	school:
		| "Abjur"
		| "Conj"
		| "Div"
		| "Ench"
		| "Evoc"
		| "Illus"
		| "Necro"
		| "Trans"
		| "Avatar"
		| "Awake"
		| "Immor"
		| "Nomad"
		| "Wu Jen";
	casting_time: { short: string; base: string };
	components: string;
	components_material: string;
	duration: string;
	description: { short: string; base: string; upcast?: string; cantrip?: string };
	sources: [string, number][];
};
type DestSource = {
	id: string;
	name: string;
	abbreviation: string;
	abbreviation_spellsheet: string;
	url?: string;
};
type AllSpellsFileContents = { version: number; kind: "spell-list"; spells: Record<string, DestSpell> };
type FilterFileKind = "character" | "source" | "class";
type SpellFilterFileContents = {
	version: number;
	kind: FilterFileKind;
	name?: string;
	spells: string[];
};

async function import_everything(args: string[]) {
	if (args.length !== 2) {
		console.error("Expected 2 args: a source file and the destination folder.");
		return;
	}
	const dest_folder = args[1];
	const script = await fs.readFile(args[0], { encoding: "utf8" });
	const input = get_interesting_raw_data(script);
	const imported_data = get_interesting_data(input);
	const file_writes = [merge_into_spells_data(imported_data.spells, path.join(dest_folder, "all_spells.json"))];
	for (const [id, spells] of Object.entries(imported_data.by_source)) {
		file_writes.push(
			merge_into_spell_list(path.join(dest_folder, "sources"), id, spells, {
				kind: "source",
				...imported_data.sources[id],
			}),
		);
	}
	for (const [id, spells] of Object.entries(imported_data.by_class)) {
		file_writes.push(
			merge_into_spell_list(path.join(dest_folder, "classes"), id, spells, {
				kind: "class",
				id,
			}),
		);
	}
	await Promise.all(file_writes);
	console.log("Import complete.");
}

type SourceSpell = {
	description: string;
	descriptionFull?: string;
	descriptionCantripDie?: string;
	time: string;
	timeFull?: string;
	source: [string, number] | [string, number][];
	defaultExcluded?: boolean;
	classes: string[];
} & Record<string, unknown>;
const KeysToKeepUnalteredForSpell = [
	["name", "name"],
	["nameShort", "name_short"],
	["level", "level"],
	["range", "range"],
	["school", "school"],
	["components", "components"],
	["compMaterial", "components_material"],
	["duration", "duration"],
];
type ImportedSpell = Omit<DestSpell, "id" | "description" | "casting_time">;

const KeysToKeepUnalteredForSource = [
	["name", "name"],
	["abbreviation", "abbreviation"],
	["abbreviationSpellsheet", "abbreviation_spellsheet"],
	["url", "url"],
];
type ImportedSource = Omit<DestSource, "id">;

async function merge_into_spells_data(spells: Record<string, DestSpell>, dest_path: string) {
	let dest_data: AllSpellsFileContents = JSON.parse(await fs.readFile(dest_path, { encoding: "utf8" }));
	if (!dest_data || dest_data.kind !== "spell-list" || dest_data.version !== 1) {
		console.log("Invalid data found in", dest_path, "re-initializing it.");
		dest_data = { version: 1, kind: "spell-list", spells: {} };
	}
	Object.assign(dest_data.spells, spells);
	await fs.writeFile(dest_path, JSON.stringify(dest_data, undefined, "\t"));
}

function id_compare(lhs: string, rhs: string) {
	return lhs.localeCompare(rhs, undefined, { caseFirst: "false" });
}

async function merge_into_spell_list(
	list_folder: string,
	list_name: string,
	spells: string[],
	additional_fields: { kind: FilterFileKind } & Record<string, string | number>,
) {
	spells.sort(id_compare);
	const dest_path = path.join(list_folder, list_name + ".json");
	let dest_data = await json_contents<SpellFilterFileContents>(dest_path);
	if (!dest_data || dest_data.version !== 1) {
		console.log("Invalid data found in", list_name, "re-initializing it.");
		dest_data = { version: 1, ...additional_fields, spells };
	} else {
		dest_data.spells.sort(id_compare);
		const new_spells = [];
		let existing_idx = 0,
			new_idx = 0;
		while (existing_idx < dest_data.spells.length && new_idx < spells.length) {
			switch (id_compare(dest_data.spells[existing_idx], spells[new_idx])) {
				case -1:
					existing_idx++;
					break;
				case 0:
					existing_idx++;
					new_idx++;
					break;
				case 1:
					new_spells.push(spells[new_idx]);
					new_idx++;
					break;

				default:
					throw new Error(
						`String compare returned invalid number (${dest_data.spells[existing_idx].localeCompare(spells[new_idx])}) when comparing ${dest_data.spells[existing_idx]} to ${spells[new_idx]}`,
					);
			}
		}
		dest_data.spells.push(...new_spells);
		if (new_idx < spells.length) dest_data.spells.push(...spells.slice(new_idx));
		dest_data.spells.sort(id_compare);
		dest_data = { version: 1, ...additional_fields, ...dest_data };
	}
	await fs.writeFile(dest_path, JSON.stringify(dest_data, undefined, "\t"));
}

async function json_contents<T>(file_path: string): Promise<T> {
	let content = "{}";
	try {
		content = await fs.readFile(file_path, { encoding: "utf8" });
	} catch (e) {
		console.log(e.message, "while reading", file_path, ". Using default.");
	}
	return JSON.parse(content);
}

function get_interesting_data(input: { spells: Record<string, SourceSpell>; sources: {} }) {
	const spells: Record<string, DestSpell> = {};
	const by_class: Record<string, string[]> = {};
	const by_source: Record<string, string[]> = {};
	const sources: Record<string, DestSource> = {};
	for (const new_spell of Object.entries(input.spells)) {
		const [desc_base, desc_higher_levels] = new_spell[1].descriptionFull.split(AtHigherLevels, 2);
		const imported_spell: DestSpell = {
			id: new_spell[0],
			...(Object.fromEntries(
				KeysToKeepUnalteredForSpell.map((key) => [key[1], new_spell[1][key[0]] || ""]),
			) as ImportedSpell),
			casting_time: {
				short: new_spell[1].time,
				base: new_spell[1].timeFull,
			},
			description: {
				short: new_spell[1].description,
				base: desc_base.trim(),
				upcast: desc_higher_levels?.trim(),
				cantrip: new_spell[1].descriptionCantripDie,
			},
			sources:
				new_spell[1].source.length === 2 && !Array.isArray(new_spell[1].source[0])
					? [new_spell[1].source as [string, number]]
					: (new_spell[1].source as [string, number][]),
		};
		for (const target of new_spell[1].classes) {
			if (by_class[target]) by_class[target].push(imported_spell.id);
			else by_class[target] = [imported_spell.id];
		}
		for (const target of imported_spell.sources) {
			if (by_source[target[0]]) by_source[target[0]].push(imported_spell.id);
			else by_source[target[0]] = [imported_spell.id];
		}
		spells[imported_spell.id] = imported_spell;
	}
	for (const new_source of Object.entries(input.sources)) {
		sources[new_source[0]] = {
			id: new_source[0],
			...(Object.fromEntries(
				KeysToKeepUnalteredForSource.map((key) => [key[1], new_source[1][key[0]]]),
			) as ImportedSource),
		};
	}
	return { spells, by_class, by_source, sources };
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
