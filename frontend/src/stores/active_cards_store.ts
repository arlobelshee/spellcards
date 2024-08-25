import { defineStore } from "pinia";
import all_spells from "@/assets/all_spells.json";
type SpellSelectionData = { id: string; already_printed: boolean };
export const useSpellsStore = defineStore("spells.active", {
	state: () => ({
		all_spells,
		active_spells: {
			descriptions: [] as SpellSelectionData[],
			rituals: [] as SpellSelectionData[],
			selectable: [] as SpellSelectionData[],
		},
	}),
	actions: {},
});
