export type SpellSelectionData = { id: string; already_printed: boolean };
export interface SpellFilter {
	descriptions: SpellSelectionData[];
	rituals: SpellSelectionData[];
	selectable: SpellSelectionData[];
}
