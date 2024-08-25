import { defineStore } from "pinia";
import all_spells from "@/assets/all_spells.json";

export const useSpellsStore = defineStore("spells.active", {
	state: () => ({ all_spells }),
	actions: {},
});
