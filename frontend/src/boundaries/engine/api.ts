import type { DataForSingleSpell } from "./data";

export type SpellSelectionData = { spell: DataForSingleSpell; already_printed: boolean };

export interface SpellFilter {
	readonly descriptions: SpellSelectionData[];
	readonly rituals: SpellSelectionData[];
	readonly selectable: SpellSelectionData[];
}
