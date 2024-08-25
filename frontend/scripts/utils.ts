import fs from "node:fs/promises";

export async function create_empty_output_folder(path) {
	if (await exists(path)) {
		await fs.rm(path, { recursive: true });
	}
	return fs.mkdir(path, { recursive: true });
}

export const exists = async (path) =>
	!!(await fs.stat(path).catch(() => false));

export async function when_all_done(
	promises: Promise<unknown>[],
): Promise<void> {
	await Promise.allSettled(promises);
}

export class DetectedFileError extends Error {
	constructor(message) {
		super(message);
	}
}

export function show_errors<T>(prefix: string, result?: T): (e: unknown) => T {
	return (e) => {
		if (e instanceof DetectedFileError) console.error(prefix, e.message);
		else console.error(prefix, e);
		return result!;
	};
}
const keyStr =
	"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

export function condense(input: number): string {
	const result: string[] = [];
	input = input + 1;
	do {
		const remainder = (input - 1) % 64;
		result.push(keyStr[remainder]);
		input = Math.floor((input - 1) / 64);
	} while (input > 0);
	return result.reverse().join("");
}

export class Slugifier {
	private next_ids = new Map<string, number>();
	next_slug(kind: string) {
		const next_id = this.next_ids.get(kind);
		if (next_id === undefined) {
			this.next_ids.set(kind, 1);
			return `${kind}:${condense(0)}`;
		} else {
			this.next_ids.set(kind, next_id + 1);
			return `${kind}:${condense(next_id)}`;
		}
	}
}
