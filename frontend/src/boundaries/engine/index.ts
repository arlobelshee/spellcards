export * from "./api";
export * from "./data";
import type { SpellFilter } from "./api";
import type { DataForCharacter } from "./data";
import { CharacterSpellFilter, IncludeEverythingFilter } from "./spell_selection";
import all_spells from "@/assets/all_spells.json";

export const FilterFor = {
	all_spells: new IncludeEverythingFilter(all_spells.spells),
	empty: new IncludeEverythingFilter({}),
	character(data: DataForCharacter): SpellFilter {
		return new CharacterSpellFilter(data, all_spells.spells);
	},
};
