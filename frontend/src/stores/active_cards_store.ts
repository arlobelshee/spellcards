import { defineStore } from "pinia";
import { FilterFor, type SpellFilter } from "@/boundaries/engine";
export const useSpellsStore = defineStore("spells.active", {
	state: () => {
		const empty = FilterFor.empty;
		return {
			all_spells: FilterFor.all_spells,
			active_spells: empty,
			all_filters: {
				characters: {} as Record<string, SpellFilter>,
				classes: {} as Record<string, SpellFilter>,
				sources: {} as Record<string, SpellFilter>,
				empty,
			},
		};
	},
	actions: {
		async load_character(slug: string) {
			const category = "characters";
			const filter_cache = this.all_filters.classes;
			if (Object.keys(filter_cache).includes(slug)) {
				this.active_spells = filter_cache[slug];
			} else {
				this.active_spells = this.all_filters.empty;
				const data = await import(`../assets/${category}/${slug}.json`);
				const filter = FilterFor.character(data);
				this.active_spells = filter;
				filter_cache[slug] = filter;
			}
		},
	},
});
