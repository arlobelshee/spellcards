import { defineStore } from "pinia";
import all_spells from "@/assets/all_spells.json";
import { EmptySpellFilter } from "@/boundaries/engine";
export const useSpellsStore = defineStore("spells.active", {
	state: () => ({
		all_spells,
		active_spells: new EmptySpellFilter(),
	}),
	actions: {},
});
