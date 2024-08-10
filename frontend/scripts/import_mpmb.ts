import fs from "node:fs/promises";
import process from "node:process";
import console from "node:console";

const AtHigherLevels = "MARKER_AT_HIGHER_LEVELS";

async function import_everything(args: string[]) {
	const script = await fs.readFile(args[0], { encoding: "utf8" });
	const input = get_interesting_raw_data(script);
	console.log(input, Object.keys(input.spells).length);
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
