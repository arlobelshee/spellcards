import fs from "node:fs/promises";
import process from "node:process";
import console from "node:console";

async function import_everything(args: string[]) {
	const script = await fs.readFile(args[0], { encoding: "utf8" });
	const input = get_interesting_raw_data(script);
	console.log(input);
}

function get_interesting_raw_data(script: string) {
	return script.slice(0, 1000);
}

await import_everything(process.argv.slice(2));
