import { defineStore } from "pinia";
import all_cards from "@/assets/all_spells.json";

export const useUserStore = defineStore("cards.active", {
	state: () => ({ all_cards }),
	actions: {},
});
