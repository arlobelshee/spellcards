import { type SpellFilter, type SpellSelectionData } from "./api";
import type { DataForCharacter, DataForSingleSpell } from "./data";

class BasicSpellFilter implements SpellFilter {
	constructor(all_spells: DataForSingleSpell[]) {
		this.descriptions = all_spells.map((v) => ({
			spell: v,
			already_printed: false,
		}));
		this.rituals = this.descriptions.filter((d) => this.is_ritual(d.spell)).map((d) => ({ ...d }));
		this.selectable = this.descriptions.map((d) => ({ ...d }));
	}
	protected is_ritual(spell: DataForSingleSpell): boolean {
		return spell.ritual;
	}
	readonly descriptions: SpellSelectionData[];
	readonly rituals: SpellSelectionData[];
	readonly selectable: SpellSelectionData[];
}

export class IncludeEverythingFilter extends BasicSpellFilter {
	constructor(all_spells: Record<string, DataForSingleSpell>) {
		super(Object.values(all_spells));
	}
}

export class CharacterSpellFilter extends BasicSpellFilter {
	constructor(
		private _char_data: DataForCharacter,
		all_spells: Record<string, DataForSingleSpell>,
	) {
		super(_char_data.spells.map((id) => all_spells[id]));
		this.mark_already_printed(_char_data.spells_printed, this.descriptions);
		this.mark_already_printed(_char_data.rituals_printed, this.rituals);
		this.mark_already_printed(_char_data.selectors_printed, this.selectable);
	}

	private mark_already_printed(spells: string[], target: SpellSelectionData[]) {
		spells.forEach((id) => {
			const match = target.find((p) => p.spell.id === id);
			if (match !== undefined) match.already_printed = true;
		});
	}
}
