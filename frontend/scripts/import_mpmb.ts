import fs from "node:fs/promises";
import process from "node:process";
import console from "node:console";

function import_everything(args: string[]) {
	console.log(JSON.stringify(args));
}

import_everything(process.argv.slice(2));
