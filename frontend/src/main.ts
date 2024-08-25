import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Lara from "@primevue/themes/lara";
import { definePreset } from "@primevue/themes";

const app = createApp(App);

app.use(router);

const preset = definePreset(Lara, {
	semantic: {
		primary: {
			50: "{purple.50}",
			100: "{purple.100}",
			200: "{purple.200}",
			300: "{purple.300}",
			400: "{purple.400}",
			500: "{purple.500}",
			600: "{purple.600}",
			700: "{purple.700}",
			800: "{purple.800}",
			900: "{purple.900}",
			950: "{purple.950}",
		},
	},
});

app.use(PrimeVue, {
	theme: {
		preset,
		options: {
			darkModeSelector: ".dark-mode",
			cssLayer: { name: "primevue", order: "reset, primevue" },
		},
	},
});
app.use(createPinia());

app.mount("#app");
