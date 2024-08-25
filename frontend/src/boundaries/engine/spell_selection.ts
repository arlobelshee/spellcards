import { type SpellFilter } from "./api";

export class EmptySpellFilter implements SpellFilter {
	descriptions = [];
	rituals = [];
	selectable = [];
}

// Next: Create a spell filter for source or one of the others. Constructor takes objects;
// the construction function does the asyinc load from the json file and passes in the results.
