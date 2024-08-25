export * from "./api";
import type { SpellFilter as SpellFilter_ } from "./api";
import { EmptySpellFilter } from "./spell_selection";
export const SpellFilter = {
	create(): SpellFilter_ {
		return new EmptySpellFilter();
	},
};
