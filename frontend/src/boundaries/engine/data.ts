export type VersionedData = { version: number; kind: "character" | "class" | "source" };
export type DataForCharacter = VersionedData & {
	kind: "character";
	name: string;
	spells: string[];
	already_printed: string[];
};
export type DataForClass = VersionedData & {
	kind: "class";
	id: string;
	name: string;
	spells: string[];
};
export type DataForSource = VersionedData & {
	kind: "source";
	id: string;
	name: string;
	abbreviation: string;
	abbreviation_spellsheet: string;
	url: string;
	spells: string[];
};
