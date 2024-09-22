import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardSheetView from "@/views/CardSheetView.vue";
import { useSpellsStore } from "@/stores/active_cards_store";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
			meta: {},
		},
		{
			path: "/by-source/:slug",
			name: "by-source",
			component: CardSheetView,
			props: { category: "sources" },
			meta: { category: "sources" },
		},
		{
			path: "/by-class/:slug",
			name: "by-class",
			component: CardSheetView,
			props: { category: "classes" },
			meta: { category: "classes" },
		},
		{
			path: "/characters/:slug",
			name: "character",
			component: CardSheetView,
			props: { category: "characters" },
			meta: { category: "characters" },
		},
	],
});

router.beforeResolve((to) => {
	const spells_store = useSpellsStore();
	switch (to.meta.category) {
		case "characters":
			spells_store.load_character(to.params.slug as string);
	}
});

export default router;
