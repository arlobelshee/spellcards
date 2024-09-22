export enum CastingTime {
	Action,
	Bonus,
	Reaction,
	Long,
}
export namespace Icons {
	export enum CastingTime {
		Action,
		Bonus,
		Reaction,
		Long,
	}
}
export type VersionedData = { version: number; kind: "character" | "class" | "source" | "spell-list" };
export type DataForCharacter = VersionedData & {
	kind: "character";
	name: string;
	spells: string[];
	spells_printed: string[];
	rituals_printed: string[];
	selectors_printed: string[];
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
export type DataForSingleSpell = {
	id: string;
	name: string;
	name_short: string;
	level: number;
	range: string;
	school: string;
	components: string;
	components_material: string;
	duration: string;
	casting_time: {
		short: string;
		base: string;
		icon: Icons.CastingTime;
	};
	description: {
		short: string;
		base: string;
	};
	sources: (string | number)[][];
};
export type DataForSpellDetails = VersionedData & {
	kind: "spell-list";
	spells: Record<string, DataForSingleSpell>;
};
