import { type SpellFilter } from "./api";

export class EmptySpellFilter implements SpellFilter {
	descriptions = [];
	rituals = [];
	selectable = [];
}
