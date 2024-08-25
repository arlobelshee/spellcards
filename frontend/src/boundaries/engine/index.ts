export * from "./api";
import type { SpellFilter } from "./api";
import { EmptySpellFilter } from "./spell_selection";
export function create(): SpellFilter {
	return new EmptySpellFilter();
}
