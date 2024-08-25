import { defineStore } from "pinia";
import all_spells from "@/assets/all_spells.json";
import { EmptySpellFilter, type SpellFilter } from "@/boundaries/engine";
export const useSpellsStore = defineStore("spells.active", {
	state: () => ({
		all_spells,
		active_spells: create(),
	}),
	actions: {},
});
function create(): SpellFilter {
	return new EmptySpellFilter();
}
