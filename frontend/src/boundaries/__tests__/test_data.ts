import type {DataForCharacter, DataForSpellDetails} from "@/boundaries/engine";

const all_spells: DataForSpellDetails = {
	"version": 1,
	"kind": "spell-list",
	"spells": {
		"ritual-spell": {
			"id": "ritual-spell",
			"name": "Abhorrence",
			"name_short": "",
			"range": "30 ft",
			"school": "Ench",
			"components": "V,S",
			"components_material": "",
			"duration": "1 min",
			"level": 0,
			"casting_time": {
				"short": "1 a",
				"base": "1 action",
				"icon": 0
			},
			"description": {
				"short": "Make a crea less appealing to others. 1 crea save or subtract 1d6 from their next Cha check ",
				"base": "You temporarily make a creature within range less appealing to others. The target makes a Wisdom saving throw against your spell. On a successful save, the spell is ineffective. On a failed save, the next time the creature makes a Charisma check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends."
			},
			"sources": [
				[
					"DM1",
					141
				]
			],
			"ritual": true
		},
		"accelerate": {
			"id": "accelerate",
			"name": "Accelerate",
			"name_short": "",
			"range": "Touch",
			"school": "Trans",
			"components": "V,S,M",
			"components_material": "a toy top",
			"duration": "Conc, 1 min",
			"level": 3,
			"casting_time": {
				"short": "1 a",
				"base": "1 action",
				"icon": 0
			},
			"description": {
				"short": "3 willing crea walking speed doubled, can use dash as bns action, adv on dex saves",
				"base": "Choose up to three willing creatures within range, which can include you. For the duration of the spell, each target’s walking speed is doubled. Each target can also use a bonus action on each of its turns to take the Dash action, and it has advantage on Dexterity saving throws.",
				"upcast": "When you cast this spell using a spell slot of 4th level or higher, you can affect one additional creature for each slot level above 3rd."
			},
			"sources": [
				[
					"DM1",
					142
				]
			],
			"ritual": false
		},
		"acumen": {
			"id": "acumen",
			"name": "Acumen",
			"name_short": "",
			"range": "Touch",
			"school": "Trans",
			"components": "V,S",
			"components_material": "",
			"duration": "Conc, 1 min",
			"level": 0,
			"casting_time": {
				"short": "1 a",
				"base": "1 action",
				"icon": 0
			},
			"description": {
				"short": "1 willing crea adds 1d6 to 1 wis check of their choice, roll before or after making check",
				"base": "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Wisdom check of its choice. It can roll the die before or after making the check. The spell then ends."
			},
			"sources": [
				[
					"DM1",
					142
				]
			],
			"ritual": false
		},
		"agonizing mark": {
			"id": "agonizing mark",
			"name": "Agonizing Mark",
			"name_short": "",
			"range": "90 ft",
			"school": "Evoc",
			"components": "S",
			"components_material": "",
			"duration": "Conc, 1 min",
			"level": 1,
			"casting_time": {
				"short": "1 a",
				"base": "1 action",
				"icon": 0
			},
			"description": {
				"short": "Mark 1 crea as prey with ray of black energy, 1 crea save or fall prone in agony",
				"base": "You choose a creature you can see within range to mark as your prey, and a ray of black energy issues forth from you. Until the spell ends, each time you deal damage to the target it must make a Charisma saving throw. On a failed save, it falls prone as its body is filled with torturous agony."
			},
			"sources": [
				[
					"DM1",
					143
				]
			],
			"ritual": false
		},
		"cantrip": {
			"id": "cantrip",
			"name": "Ale-dritch Blast",
			"name_short": "",
			"range": "60 ft",
			"school": "Conj",
			"components": "V,S",
			"components_material": "",
			"duration": "Instantaneous",
			"level": 0,
			"casting_time": {
				"short": "1 a",
				"base": "1 action",
				"icon": 0
			},
			"description": {
				"short": "Shoot stream of cold ale, ranged spell attack 1d8 cold dmg, crea saves or is poisoned; see book",
				"base": "A stream of ice-cold ale blasts from your outstretched hands toward a creature or object within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage and it must make a successful Constitution saving throw or be poisoned until the end of its next turn. A targeted creature has disadvantage on the saving throw if it has drunk any alcohol within the last hour. The damage increases when you reach higher levels: 2d8 at 5th level, 3d8 at 11th level, and 4d8 at 17th level.",
				"cantrip": "Shoot stream of cold ale, ranged spell attack 'CD'1d8 cold dmg, crea saves or is poisoned; see book"
			},
			"sources": [
				[
					"DM1",
					143
				]
			],
			"ritual": false
		}
	}
};

const character: DataForCharacter = {
	"version": 1,
	"kind": "character",
	"name": "correct_name",
	"spells": [
		"abhorrence",
		"aledritch blast",
	],
	"spells_printed": [
		"abhorrence"
	],
	"rituals_printed": [
		"aledritch blast"
	],
	"selectors_printed": [
		"aledritch blast"
	]
};

export const TestData = {
	all_spells,
	character
}