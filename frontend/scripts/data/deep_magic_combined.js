/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things that have already been filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: (), {}, [], "", ''.
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use (online) code checking software like https://jshint.com

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Source

	Effect:		This is the syntax for adding a new source to the sheet.

	Remarks:	The object name of a source is used for almost everything that you can import into the sheet.
				A tip is to invoke a new source object at the start of an import script to make sure it is available for whatever you are adding.

	Sheet:		v13.1.0 and newer
*/

var iFileName = "Deep Magic Vol 1 Source.js";
/* 	iFileName // OPTIONAL //
	TYPE:	string
	USE:	how the file will be named in the sheet if you import it as a file

	Note that this is a variable called 'iFileName'.
	Variables invoked inside an import script will not be available after importing.
	However, if you invoke the variable without the 'var', it will be available after importing.

	This doesn't have to be the same as the actual name of the file.
	This doesn't need to have the .js file extension.
	Only the first occurrence of this variable will be used.
*/

RequiredSheetVersion("13.0.6");
/*	RequiredSheetVersion // OPTIONAL //
	TYPE:	function call with one variable, a string or number
	USE:	the minimum version of the sheet required for the import script to work

	If this script is imported into a sheet with an earlier version than given here, the player will be given a warning.

	The variable you input can be a the full semantic version of the sheet as a string (e.g. "13.0.6" or "13.1.0-beta1+201209").
	Alternatively, you can input a number, which the sheet will translate to a semantic version.
	For example:
		FUNCTION CALL						REQUIRED MINIMUM VERSION
		`RequiredSheetVersion(13);`			13.0.0
		`RequiredSheetVersion(13.1);`		13.1.0

	You can find the full semantic version of the sheet at the bottom of every page,
	or look at the "Get Latest Version" bookmark, which lists the version number,
	or go to File >> Properties >> Description, where the version is part of the document title.
*/

SourceList["DM1"] = {
/* 	SourceList object name // REQUIRED //
	TYPE:	string
	USE:	object name of the source as it will be used by the sheet

	By adding a new object to the existing SourceList object, we create a new source.
	The object name here is 'BoP'. You can use any object name as long as it is not already in use.
	If you do use an object name that is already in use, you will be overwriting that object.

	The object name doesn't have to be the same as the abbreviation used for the source (see below), but it does make it easier.

	Do not use a single-letter object name, those are reserved for official WotC publications.
	Doing so will make it likely that you overwrite an existing source.

	Note that "HB" is already used by the "Homebrew" source.
	Note that this doesn't have to be only lower case!
	Also note the absence of the word "var" and the use of brackets [].
*/
	name : "Deep Magic Volume 1",
/*	name // REQUIRED //
	TYPE:	string
	USE:	name of the source as it will be used by the sheet

	This is the full name of the source.
	The full name will only be used in tooltips and dialogs, so make it as long as you want.
*/
	abbreviation : "DM1",
/*	abbreviation // REQUIRED //
	TYPE:	string
	USE:	abbreviation of the source as it will be used by the sheet

	The abbreviation doesn't have to be the same as the object name used for the source (see above), but it does make it easier.

	This is a greatly shortened name of the source.
	The abbreviation will be used extensively throughout the sheets, so be sure to make it easily recognizable.
*/
	abbreviationSpellsheet : "D",
/*	abbreviationSpellsheet // OPTIONAL //
	TYPE:	string
	USE:	abbreviation of the source as it will be used on the spell sheet pages in the "B" column
	ADDED:	v13.0.1

	The spell sheet pages have very limited space for the abbreviations so this is a separate attribute.
	It is recommended to keep this abbreviation to just a single character.

	Two characters might fit, depending on the character. For example, the "M" and "W" are wider
	in most fonts than other letter.
	If you are using more than one character, be sure to try the abbreviation on the sheet,
	or else the text might overflow the field, resulting in a [+] sign that will obscure the whole field.

	If this attribute is not present, the sheet will default to the first letter of the object name
	(not the `abbreviation` attribute).
	For example, for the above `SourceList["BoP"]`, the sheet will put a "B" on the spell sheet page.
*/



	url : "https://koboldpress.com/kpstore/product/deep-magic-volume-1-2-2023/",
/*	url // OPTIONAL //
	TYPE:	string
	USE:	link to the source online

	This URL is only used in the Source Materials dialog.

	Please use https if available.
*/

}

var iFileName = "Deep Magic Vol 1 Spells.js";

RequiredSheetVersion("13.0.6");


/* SpellsList["spellname"] = {
    name : "Spell name",
    classes : ["druid"],   
    source : ["DM1", 1],
    level : 1,
    school : "", //"Abjur" "Conj" "Div" "Ench" "Illus" "Necro" "Trans" "Evoc"
    time : "1 a", 
	timeFull : "1 reaction, which you take when ", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "Incense or a black candle", 
    duration : "Conc, 1 min", 
    save : "Wis", 
	ritual : true, //optional
    description : "1 crea save or ",
    descriptionFull : "Long description here." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher...",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
}; */

//129 spells 20/06/2024

SpellsList["abhorrence"] = {
    name : "Abhorrence",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 141],
    level : 0,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft",
    components : "V,S",
    duration : "1 min", 
    save : "Wis", 
    description : "Make a crea less appealing to others. 1 crea save or subtract 1d6 from their next Cha check ", 
    descriptionFull : "You temporarily make a creature within range less appealing to others. The target makes a Wisdom saving throw against your spell. On a successful save, the spell is ineffective. On a failed save, the next time the creature makes a Charisma check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["accelerate"] = {
    name : "Accelerate",
    classes : ["druid", "bard", "cleric", "sorcerer"],   
    source : ["DM1", 142],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a toy top", 
    duration : "Conc, 1 min", 
    description : "3 willing crea walking speed doubled, can use dash as bns action, adv on dex saves", 
    descriptionFull : "Choose up to three willing creatures within range, which can include you. For the duration of the spell, each target’s walking speed is doubled. Each target can also use a bonus action on each of its turns to take the Dash action, and it has advantage on Dexterity saving throws." + "\n   " + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can affect one additional creature for each slot level above 3rd.",
};

SpellsList["acumen"] = {
    name : "Acumen",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 142],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "1 willing crea adds 1d6 to 1 wis check of their choice, roll before or after making check", 
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Wisdom check of its choice. It can roll the die before or after making the check. The spell then ends.", 
};

SpellsList["agonizing mark"] = { 
    name : "Agonizing Mark",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "wizard"],  
    source : ["DM1", 143],
    level : 1,
    school : "Evoc",
    time : "1 a", 
    range : "90 ft", 
    components : "S",
    duration : "Conc, 1 min",
    save : "Cha", 
    description : "Mark 1 crea as prey with ray of black energy, 1 crea save or fall prone in agony",
    descriptionFull : "You choose a creature you can see within range to mark as your prey, and a ray of black energy issues forth from you. Until the spell ends, each time you deal damage to the target it must make a Charisma saving throw. On a failed save, it falls prone as its body is filled with torturous agony.",
};


SpellsList["aledritch blast"] = {
    name : "Ale-dritch Blast",
    classes : ["druid", "bard", "wizard"],   
    source : ["DM1", 143],
    level : 0,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con",  
    description : "Shoot stream of cold ale, ranged spell attack 1d8 cold dmg, crea saves or is poisoned; see book",
	descriptionCantripDie : "Shoot stream of cold ale, ranged spell attack 'CD'1d8 cold dmg, crea saves or is poisoned; see book",
    descriptionFull : "A stream of ice-cold ale blasts from your outstretched hands toward a creature or object within range. Make a ranged spell attack against the target. On a hit, it takes 1d8 cold damage and it must make a successful Constitution saving throw or be poisoned until the end of its next turn. A targeted creature has disadvantage on the saving throw if it has drunk any alcohol within the last hour. The damage increases when you reach higher levels: 2d8 at 5th level, 3d8 at 11th level, and 4d8 at 17th level.",  
};


SpellsList["allure"] = {
    name : "Allure",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],  
    source : ["DM1", 143],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "1 willing crea add 1d6 to next charisma check of its choice, roll before or after the check", 
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Charisma check of its choice. It can roll the die before or after making the check. The spell then ends.", 
};


SpellsList["alter arrows fortune"] = {
    name : "Alter Arrow's Fortune",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "wizard"],  
    source : ["DM1", 144],
    level : 1,
    school : "Div", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when an enemy makes a ranged attack that hits", 
    range : "100 ft", 
    components : "S",  
    duration : "Instantaneous", 
    save : "Cha",  
    description : "On successful enemy rngd or spell attk, 1 crea save or reroll attack roll, taking lower roll (disadvantage)", 
    descriptionFull : "You clap your hands, setting off a chain of tiny events that culminate in throwing off an enemy’s aim. When an enemy makes a ranged attack with a weapon or a spell that hits one of your allies, this spell causes the enemy to reroll the attack roll unless the enemy makes a successful Charisma saving throw. The attack is resolved using the lower of the two rolls (effectively giving the enemy disadvantage on the attack).",
};

SpellsList["ancestors strength"] = {
    name : "Ancestor's Strength",
    classes : ["druid", "cleric", "paladin"],   
    source : ["DM1", 145],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "Touch",
    components : "V,S",
    duration : "Conc, 8 h",
    description : "1 willing crea becomes invigorated, strength of next size category, adv on str checks", 
    descriptionFull : "Choose a willing creature you can see and touch. Its muscles bulge and become invigorated. For the duration, the target is considered one size category larger for determining its carrying capacity, the maximum weight it can lift, push, or pull, and its ability to break objects. It also has advantage on Strength checks.",
};

SpellsList["anchoring rope"] = {
    name : "Anchoring Rope",
    classes : ["druid", "bard", "ranger"],   
    source : ["DM1", 145],
    level : 1,
    school : "Evoc", 
    time : "1 a/rea", 
	timeFull : "1 action, or 1 reaction, which you take while falling", 
    range : "30 ft", 
    components : "V,S", 
    duration : "5 min", 
    description : "Create spectral rope magically anchored at a point you select within range. See book", 
    descriptionFull : "You create a spectral lanyard. One end is tied around your waist, and the other end is magically anchored in the air at a point you select within range. You can choose to make the rope from 5 to 30 feet long, and it can support up to 800 pounds. The point where the end of the rope is anchored in midair can’t be moved after the spell is cast. If this spell is cast as a reaction while you are falling, you stop at a point of your choosing in midair and take no falling damage. You can dismiss the rope as a bonus action." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd  level or higher, you can create one additional rope for every two slot levels above 1st. Each rope must be attached to a different creature.",
};

SpellsList["animal spy"] = {
    name : "Animal Spy",
    classes : ["druid", "ranger"],  
    source : ["DM1", 146],
    level : 2,
    school : "Div",
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 h",
    description : "Create mental link with beast, use  bns action to transfer your awareness to the beast and back, see b", 
    descriptionFull : "You create a mental link between you and a beast within range. Until the spell ends, you can use a bonus action to transfer your awareness to the beast—using its vision, hearing, smell, taste, and touch—and another bonus action on any subsequent turn to return your awareness to your body. You can use an action to dismiss the spell entirely. This spell affects normal beasts, including giant versions of animals, but not conjured animals or familiars. The spell does not allow you to control the beast or make it friendly to you. While you experience the world through the beast’s senses, your body is motionless, unaware of the outside world and effectively unconscious. The spell ends if the distance between you and the beast is ever greater than 1 mile, or if the beast is killed. If you are using the beast’s senses when it is killed, you must succeed on a DC 14 Wisdom saving throw or be stunned for 1d4 rounds from the shock of experiencing its death.",
};

SpellsList["animated scroll"] = {
    name : "Animated Scroll",
    classes : ["druid", "sorcerer", "wizard"],
    source : ["DM1", 147],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M",
    compMaterial : "Intricately folded paper or parchment",
    duration : "24 h", 
    description : "fold paper into an animal shape, becomes enchanted and gains properties of the animal it represents.", 
    descriptionFull : "The paper or parchment must be folded into the shape of an animal before casting the spell. It then becomes an animated paper animal of the kind the folded paper most closely resembles. The creature uses the stat block of any beast that has a challenge rating of 0. It is made of paper, not flesh and bone, but it can do anything the real creature can do: a paper owl can fly and attack with its talons, a paper frog can swim without disintegrating in water, and so forth. It follows your commands to the best of its ability, including carrying messages to a recipient whose location you know. You can’t have more than one animated paper animal at a time. If you cast this spell while you already have an animated paper animal, you instead cause it to adopt a new form. Choose any beast that has a challenge rating of 0. Your animated paper animal transforms into the chosen creature. The duration increases by 24 hours at 5th level (48 hours), 11th level (72 hours), and 17th level (96 hours).", 
};

SpellsList["anticipate attack"] = {
    name : "Anticipate Attack",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 147],
    level : 2,
    school : "Div", 
    time : "1 a", 
	timeFull : "1 reaction, which you take when you are attacked but before the attack roll is made",
    range : "Self", 
    components : "V,S",
    duration : "Instantaneous", 
    description : "Spot oncoming attack, move half speed w/o prvkng opp attks, miss attk if no longer in range, see b", 
    descriptionFull : "In a flash of foreknowledge, you spot an oncoming attack with enough time to avoid it. Upon casting this spell, you can move up to half your speed without provoking opportunity attacks. The oncoming attack still occurs but misses automatically if you are no longer within the attack’s range, are in a space that’s impossible for the attack to hit, or can’t be targeted by that attack in your new position. If none of those circumstances apply but the situation has changed—you have moved into a position where you have cover, for example—then the attack is made after taking the new situation into account.",
};

SpellsList["anticipate weakness"] = {
    name : "Anticipate Weakness",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "warlock", "wizard"],  
    source : ["DM1", 147],
    level : 1,
    school : "Div", 
    time : "1 bns",
    range : "Self",
    components : "V,S", 
    duration : "Instantaneous",
    description : "See gaps in foe's defense, gain advantage on attack rolls until end of next turn", 
    descriptionFull : "With a quick glance into the future, you pinpoint where a gap is about to open in your foe’s defense, and then you strike. After casting anticipate weakness, you have advantage on attack rolls until the end of your turn.",
};

SpellsList["arcane parasite"] = {
    name : "Arcane Parasite",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 147],
    level : 7,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S",
    duration : "2 h", 
    description : "Draw on arcane power to cast without spellslots, reduce spell duration by 10 m per spell level, see book",
    descriptionFull : "This spell creates a link between you and a nearby source of arcane power, allowing you to draw on its strength to bolster your spellcasting ability. When you cast a spell, you can use a bonus action to draw on the link. Doing so means you expend no spell slots to cast the spell, the energy instead comes from the external power. The more you draw on the link, the harder it is to maintain. Each spell you cast in this manner decreases the duration of the arcane parasite spell by 10 minutes per level of the spell you cast using the link. For example, if you cast a fireball spell using the link, you would not expend a spell slot in the casting, but the duration of this spell would decrease by 30 minutes. If you cast a spell using the link and your remaining duration is equal to or less than the spell’s level × 10 minutes, then this spell ends as soon as that spell is cast.",
	ritual : true,
};  

SpellsList["aspect of the ape"] = {
    name : "Aspect of the Ape",
    classes : ["druid", "ranger"],   
    source : ["DM1", 148],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 hr",
    description : "Crea gains climbing speed, adv on str (athletics) checks when jumping or climbing", 
    descriptionFull : "You alter the appearance of a creature you touch, giving it a more simian form. While this spell is in effect, the subject gains a climbing speed equal to its normal walking speed, and gains advantage on Strength (Athletics) checks made when jumping or climbing. When up in a tree’s branches (or in a similar area, at the GM’s discretion) the target can move up to its climbing speed as a bonus action, using brachiation to reach a nearby tree if the branches are close enough together. This bonus action can be taken only if the subject has at least two hands free, or one hand free if the subject is barefoot.",
}; 

SpellsList["aspect of the ram"] = {
    name : "Aspect of the Ram",
    classes : ["druid", "ranger"],   
    source : ["DM1", 150],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S",  
    duration : "Conc, 10 min", 
    description : "Take on physical attributes of a ram, gain ram attack action, adv on athletics/acrobatics checks see book", 
    descriptionFull : "You take on the aspect of a ram, including some physical attributes. Your body hair grows thick and woolly, and a curling pair of horns sprouts from your head. You can make a ram attack with these horns as an action, and you are proficient with this attack. You deal 1d6 bludgeoning damage on a hit.  If you move at least 20 feet straight toward a target and hit with a ram attack on the same turn, the target takes an extra 1d6 bludgeoning damage. If the target is a creature, it must succeed on a Strength check against your spell save DC or be knocked prone. You ignore difficult terrain caused by rubble, ice sheets, scree, or steep slopes. You also gain advantage on Strength (Athletics) checks made while climbing or jumping, and Dexterity (Acrobatics) checks made for balance or to stay on your feet.",
};

SpellsList["aspect of the serpent"] = {
    name : "Aspect of the Serpent",
    classes : ["druid", "sorcerer", "wizard"], 
    source : ["DM1", 151],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "Touch",
    components : "V,S,M", 
    compMaterial : "A dried snakeskin", 
    duration : "Conc, 1 min", 
    description : "Gain 60ft darkvision/30 ft blindsight, ranged weapon attack 2d6 poison dmg on bns", 
    descriptionFull : "A creature you touch takes on snakelike aspects for the duration of the spell. Its tongue becomes long and forked, its canine teeth become fangs with venom sacs, and its pupils become sharply vertical. The target gains darkvision with a range of 60 feet and blindsight with a range of 30 feet. As a bonus action when you cast the spell, the target can make a ranged weapon attack with a normal range of 60 feet that deals 2d6 poison damage on a hit. As an action, the target can make a bite attack using either Strength or Dexterity (Melee Weapon Attack: range 5 ft., one creature; Hit: 2d6 piercing damage), and the creature must make a successful DC 14 Constitution saving throw or be paralyzed for 1 minute. A creature paralyzed in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success)." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, both the ranged attack and bite attack damage increase by 1d6 for each slot level above 3rd.",
};

SpellsList["avoid grevious injury"] = {
    name : "Avoid Grevious Injury",
    classes : ["druid", "bard", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 152],
    level : 1,
    school : "Div", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when you are struck by a critical hit",
    range : "Self", 
    components : "V,S",  
    duration : "Instantaneous", 
    description : "Cast after crit but before dmg rolled, attack becomes a normal hit",
    descriptionFull : "You cast this spell when a foe strikes you with a critical hit but before damage dice are rolled. The critical hit against you becomes a normal hit.",
};

SpellsList["awaken object"] = {
    name : "Spell name",
	classes : ["druid"], 
    source : ["DM1", 152],
    level : 8,
    school : "Trans", 
    time : "8 h", 
    range : "Touch", 
    components : "V,S,M\u2020", 
    compMaterial : "Ruby worth at least 1000g", 
    duration : "Permanent", 
    description : "Imbue object with sentience and free will, stats determined by size, can make melee attacks see book", 
    descriptionFull : "After spending the casting time enchanting a ruby along with a Large or smaller nonmagical object in humanoid form, you touch the ruby to the object. The ruby dissolves into the object, which becomes a living construct imbued with sentience. If the object has no face, a humanoid face appears on it in an appropriate location. The awakened object’s statistics are determined by its size, as shown on the table below. An awakened object can use an action to make a melee weapon attack against a target within 5 feet of it. It has free will, acts independently, and speaks one language you know. It is initially friendly to anyone who assisted in its creation. An awakened object’s speed is 30 feet. If it has no apparent legs or other means of moving, it gains a flying speed of 30 feet and it can hover. Its sight and hearing are equivalent to a typical human’s senses. Intelligence, Wisdom, and Charisma can be adjusted up or down by the GM to fit unusual circumstances. A beautiful statue might awaken with increased Charisma, for example, or the bust of a great philosopher could have surprisingly high Wisdom.",
};


SpellsList["batsense"] = {
    name : "Batsense",
    classes : ["druid", "bard", "ranger", "sorcerer"],   
    source : ["DM1", 153],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "A bit of fur from a bat's ear", 
    duration : "1 h", 
    description : "Echolocation + blindsight, can't use if deafened, disadv on stealth/adv on perception (hearing) chks",
    descriptionFull : "For the duration of the spell, a creature you touch can produce and interpret squeaking sounds used for echolocation, giving it blindsight out to a range of 60 feet. The target cannot use its blindsight while deafened, and its blindsight doesn’t penetrate areas of magical silence. While using blindsight, the target has disadvantage on Dexterity (Stealth) checks that rely on being silent. Additionally, the target has advantage on Wisdom (Perception) checks that rely on hearing.",
};

SpellsList["bewilderment"] = {
    name : "Bewilderment",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 154],
    level : 0,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Wis", 
    description : "1 crea save or subtract 1d6 from next intelligence check",
    descriptionFull : "You temporarily inhibit the cognitive ability of a creature within range. If the target makes a successful Wisdom saving throw, the spell is ineffective. On a failed save, the next time the creature makes an Intelligence check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["biting arrow"] = {
    name : "Biting Arrow",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 154],
    level : 0,
    school : "Evoc",
    time : "1 a", 
    range : "self", 
    components : "V,M", 
    compMaterial : "an arrow or thrown weapon", 
    duration : "1 rnd", 
    description : "Ranged weapon attack to 120 ft, target coated in frost until next turn, 1d6 dmg if rea used see book",
    descriptionFull : "As part of the action used to cast this spell, you make a ranged weapon attack with a bow, a crossbow, or a thrown weapon. The effect is limited to a range of 120 feet despite the weapon’s range, and the attack is made with disadvantage if the target is in the weapon’s long range. If the weapon attack hits, it deals damage as usual. In addition, the target becomes coated in thin frost until the start of your next turn. If the target uses its reaction before the start of your next turn, it immediately takes 1d6 cold damage and the spell ends. The spell’s damage, for both the ranged attack and the cold damage, increases by 1d6 when you reach 5th level (+1d6 and 2d6), 11th level (+2d6 and 3d6), and 17th level (+3d6 and 4d6).",
};

SpellsList["bless the dead"] = {
    name : "Bless the Dead",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 157],
    level : 0,
    school : "Abjur", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Wis", 
    description : "Bless a deceased creature, let it to cross to realm of the dead. Cannot turn undead.",
    descriptionFull : "You grant a blessing to one deceased creature, enabling it to cross over to the realm of the dead in peace. A creature that benefits from bless the dead can’t become undead. The spell has no effect on living creatures or the undead.",
};

SpellsList["blood offering"] = {
    name : "Blood Offering",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 159],
    level : 3,
    school : "Necro", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Touch a fresh corpse you have damaged before it died, regain 1d4 x CR rating (min 1d4) HP ",
    descriptionFull : "You touch the corpse of a creature that isn’t undead or a construct and consume its life force. You must have dealt damage to the creature before it died, and it must have been dead for no more than 1 hour. You regain a number of hit points equal to 1d4 × the creature’s challenge rating (minimum of 1d4). The creature can be restored to life only by means of a true resurrection or a wish spell.",
};

SpellsList["bloodhound"] = {
    name : "Bloodhound",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 161],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "A drop of ammonia", 
    duration : "8 h", 
    description : "1 crea gains enhanced smell, adv on wis perception checks using smell and surv checks for tracking",
    descriptionFull : "You touch a willing creature to grant it an enhanced sense of smell. For the duration, that creature has advantage on Wisdom (Perception) checks that rely on smell and on Wisdom (Survival) checks to follow tracks." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you also grant the target blindsight out to a range of 30 feet for the duration.",
};

SpellsList["bloody smite"] = {
    name : "Bloody Smite",
    classes : ["druid", "cleric", "ranger", "wizard"],   
    source : ["DM1", 161],
    level : 1,
    school : "Necro", 
    time : "1 bns", 
    range : "Self", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "On next melee wpn attk, deal extra 1d6 necrotic dmg, save on each turn or 1d6 dmg and can't cast",
    descriptionFull : "The next time during the spell’s duration that you hit a creature with a melee weapon attack, your weapon pulses with a dull red light, and the attack deals an extra 1d6 necrotic damage to the target. Until the spell ends, the target must make a Constitution saving throw at the start of each of its turns. On a failed save, it takes 1d6 necrotic damage, it bleeds profusely from the mouth, and it can’t speak intelligibly or cast spells that have a verbal component. On a successful save, the spell ends. If the target or an ally within 5 feet of it uses an action to tend the wound and makes a successful Wisdom (Medicine) check against your spell save DC, or if the target receives magical healing, the spell ends.", 
};

SpellsList["bones of stone"] = {
    name : "Bones of Stone",
    classes : ["druid", "cleric", "ranger"],   
    source : ["DM1", 162],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "A pebble and a sliver of bone", 
    duration : "Conc, 1 min", 
    description : "1 crea gain resistance to slash/bludg dmg, adv on str checks against effects that would move char",
    descriptionFull : "The bones of a creature you touch gain the strength and density of stone. Until the spell ends, the target has resistance to slashing damage and bludgeoning damage, and it gains advantage on Strength checks against effects that would move the target against its will.",
};

SpellsList["boulder toss"] = {
    name : "Boulder Toss",
    classes : ["druid"],   
    source : ["DM1", 163],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "Str considered to be 19 for hauling obj, range of 60/240 ft, 2d10 bludg dmg on hit, save or prone",
    descriptionFull : "You draw the power of the mountains into you, gaining a surge of strength that allows you to take an action to hurl a rock (or similar object) as a giant does. Your Strength is considered to be 19 for the purpose of determining damage from objects that you hurl. Your hurled rock has a range of 60/240 feet and deals 2d10 bludgeoning damage on a hit. If the target is a creature, it must succeed on a Strength check against your spell save DC or be knocked prone." + AtHigherLevels + "If you cast this spell using a spell slot of 4th or 5th level, your Strength is considered to be 21, and the bludgeoning damage increases to 3d10. If you cast this spell using a spell slot of 6th level or higher, your Strength is considered to be 23, and the bludgeoning damage increases to 4d10.",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};

SpellsList["brawn boost"] = {
    name : "Brawn Boost",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 164],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "1 crea add 1d6 to str check of their check, can roll before or after check",
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Strength check of its choice. It can roll the die before or after making the check. The spell then ends.",
};

SpellsList["breathtaking wind"] = {
    name : "Breathtaking Wind",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 164],
    level : 1,
    school : "Evoc", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Blast of winter air at 1 crea, must save or unable to speak or cast spells",
    descriptionFull : "You target a creature with a blast of wintry air. That creature must make a successful Constitution saving throw or become unable to speak or cast spells with a vocal component for the duration of the spell.",
};

SpellsList["breeze compass"] = {
    name : "Breeze compass",
    classes : ["druid", "wizard"],   
    source : ["DM1", 164],
    level : 3,
    school : "Div", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "A magnetized needle", 
    duration : "Conc, 1 h", 
    description : "Breeze leads you to location you imagine, requires regular arcana checks, see book",
    descriptionFull : "When you cast breeze compass, you must clearly imagine or mentally describe a location. It doesn’t need to be a location you’ve been to as long as you know it exists on the Material Plane. Within moments, a gentle breeze arises and blows along the most efficient path toward that destination. Only you can sense this breeze, and whenever it brings you to a decision point (a fork in a passageway, for example), you must make a successful DC 8 Intelligence (Arcana) check to deduce which way the breeze indicates you should go. On a failed check, the spell ends. The breeze guides you around cliffs, lava pools, and other natural obstacles, but it doesn’t avoid enemies or hostile creatures.",
};

SpellsList["brittling"] = {
    name : "Brittling",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 164],
    level : 4,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "An icicle", 
    duration : "Instantaneous", 
    description : "Metal or stone object becomes brital, HP reduced and gain adv on str checks to break object",
    descriptionFull : "This spell uses biting cold to make a metal or stone object you touch become brittle and more easily shattered. The object’s hit points are reduced by a number equal to your level as a spellcaster, and Strength checks to shatter or break the object are made with advantage if they occur within 1 minute of the spell’s casting. If the object isn’t shattered during this time, it reverts to the state it was in before the spell was cast.",
};

SpellsList["carmellovoltas irksome preserves"] = {
    name : "Carmello-Volta’s irksome preserves",
	nameShort : "C.V. irksome preserves",
    classes : ["druid"],   
    source : ["DM1", 165],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a small berry or a piece of fruit", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "Jam oozes from mechanical device, Constructs save or disadv on attks/checks",
    descriptionFull : "At your command, delicious fruit jam oozes from a small mechanical device (such as a crossbow trigger, a lock, or a clockwork toy), rendering the device inoperable until the spell ends, and the device is cleaned with a damp cloth. Cleaning away the jam takes an action, but doing so has no effect until the spell ends. One serving of the jam can be collected in a suitable container. If it’s eaten (as a bonus action) within 24 hours, the jam restores 1d4 hit points. The jam’s flavor is determined by the material component."  + "\n   " + "The spell can affect constructs, with two limitations. First, the target creature negates the effect with a successful Dexterity saving throw. Second, unless the construct is Tiny, only one component (an eye, a knee, an elbow, and so forth) can be disabled. The affected construct has disadvantage on attack rolls and ability checks that depend on the disabled component until the spell ends and the jam is removed.",
};

SpellsList["caustic blood"] = {
    name : "Caustic blood",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 166],
    level : 2,
    school : "Trans",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when an enemy’s attack deals piercing or slashing damage to you", 
    range : "S:30-ft rad", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex",
    description : "Blood becomes caustic, on pierce/slash dmg, 3 crea save or take 1d10 acid damage.",
    descriptionFull : "Your blood becomes caustic when exposed to the air. When you take piercing or slashing damage, you can use your reaction to select up to three creatures within 30 feet of you. Each target takes 1d10 acid damage unless it makes a successful Dexterity saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the number of targets increases by one for each slot level above 2nd, to a maximum of six targets.",
};

SpellsList["caustic touch"] = {
    name : "Caustic touch",
    classes : ["druid"],   
    source : ["DM1", 166],
    level : 0,
    school : "Evoc", 
    time : "1 a", 
    range : "touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Hand sweats caustic slime, melee spell attk, 1 creature save or disadv on conc, 1d8 acid dmg",
    descriptionFull : "Your hand sweats profusely and becomes coated in a film of caustic slime. Make a melee spell attack against a creature you touch. On a hit, the target takes 1d8 acid damage. If the target was concentrating on a spell, it has disadvantage on its Constitution saving throw to maintain concentration. This spell’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).",
	descriptionCantripDie : "Hand sweats caustic slime, melee spell attk, 1 creature save or disadv on conc, `CD`d8 acid dmg",
};

SpellsList["clash of glaciers"] = {
    name : "Clash of glaciers",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 171],
    level : 5,
    school : "Evoc", 
    time : "1 a", 
    range : "S:100ft line", 
    components : "V,S,M", 
    compMaterial : "a piece of cracked glass", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Conjure line of icy boulders, crush anything beneath them, dex save or 5d6 bludg dmg",
    descriptionFull : "You conjure several icy boulders in a line 100 feet long, which crush anything beneath them. Each creature in the area must make a Dexterity saving throw, taking 5d6 bludgeoning damage and 5d6 cold damage on a failed save or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th. You decide whether each extra die deals bludgeoning or cold damage.", 
};

SpellsList["clumsiness"] = {
    name : "Clumsiness",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 173],
    level : 0,
    school : "Necro", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Con", 
    description : "Make 1 crea less dexterous, save or subtract 1d6 from next dex check",
    descriptionFull : "You temporarily make a creature within range less dexterous. If the target makes a successful Constitution saving throw, the spell is ineffective. On a failed save, the next time the creature makes a Dexterity check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

 
SpellsList["comprehend wild shape"] = {
    name : "Comprehend wild shape",
    classes : ["druid"],   
    source : ["DM1", 174],
    level : 2,
    school : "Div", 
    time : "1 a",  
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "two or more matching carved totems", 
    duration : "1 h", 
    description : "Communicate while in beast form with the recipient of the carved totem",
    descriptionFull : "Give one of the carved totems to an ally while keeping the other yourself. For the duration of the spell, you and whoever holds the other totem can communicate while either of you is in a beast shape. This isn’t a telepathic link; you simply understand each other’s verbal communication, similar to the effect of a speak with animals spell. This effect doesn’t allow a druid in beast shape to cast spells." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can increase the number of target creatures by two for each slot level above 2nd. Each creature must receive a matching carved totem.",
};

SpellsList["conjure fey hound"] = {
    name : "Conjure fey hound",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 174],
    level : 5,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a wooden or metal whistle", 
    duration : "Conc, 1 h", 
    description : "Summon a Hound of the Night (see Tome of Beasts), can bite, teleport, frost breath",
    descriptionFull : "You summon a fey hound to fight by your side. A hound of the night (see Tome of Beasts) appears in an unoccupied space that you can see within range. The hound disappears when it drops to 0 hit points or when the spell ends. The summoned hound is friendly to you and your companions. Roll initiative for the summoned hound, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the hound, it stands by your side and attacks nearby creatures that are hostile to you but otherwise takes no actions." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, you summon two hounds. When you cast this spell using a 9th-level spell slot, you summon three hounds.",
};

SpellsList["conjure forest defender"] = {
    name : "Conjure Forest Defender",
    classes : ["druid"],   
    source : ["DM1", 174],
    level : 6,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "One humanoid body which the spell consumes", 
    duration : "Until destroyed", 
    save : "Wis", 
    description : "Bring a body to life as a forest defender, obeys your commands.",
    descriptionFull : "When you cast this spell in a forest, you fasten sticks and twigs around a body. The body comes to life as a forest defender (see below). The forest defender is friendly to you and your companions. Roll initiative for the forest defender, which has its own turns. It obeys any verbal or mental commands that you issue to it (no action required by you), as long as you remain within its line of sight. If you don’t issue any commands to the forest defender, if you are out of its line of sight, or if you are unconscious, it defends itself from hostile creatures but otherwise takes no actions. A body sacrificed to form the forest defender is permanently destroyed and can be restored to life only by means of a true resurrection or a wish spell. You can have only one forest defender under your control at a time. If you cast this spell again, the previous forest defender crumbles to dust." + AtHigherLevels + "When you cast this spell using a 9th‑level spell slot, you summon two forest defenders instead of one, and you can control up to two forest defenders at a time.", 
};

SpellsList["conjure mock animals"] = {
    name : "Conjure Mock Animals",
    classes : ["druid", "ranger"],   
    source : ["DM1", 176],
    level : 1,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    save : "Dex", 
    description : "See Cjr Animals, have 1HP/1dmg, at 0 HP explode in flash, 2d4 rad dmg + save or blind within 5 ft.",
    descriptionFull : "You summon fey spirits that take the outward appearance of animals, but merely to serve as a distraction and trap for the unwary. The spell functions as conjure animals, but each mock animal has only 1 hit point and deals only 1 damage on a hit regardless of its appearance. When a mock animal is dropped to 0 hit points, it explodes in a flash of light, dealing 2d4 radiant damage to all creatures within 5 feet of it. Each creature that takes damage must make a Dexterity saving throw. On a failed save, the creature is blinded for 1 round.",
};

SpellsList["conjure scarab swarm"] = {
    name : "Conjure scarab swarm",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 176],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a beetle carapace", 
    duration : "Conc, 10 min", 
    description : "Summon two swarms of beetles, each does up to 4d4 piercing dmg",
    descriptionFull : "You summon swarms of scarab beetles to attack your foes. Two swarms of insects (beetles) appear in unoccupied spaces that you can see within range. Each swarm disappears when it drops to 0 hit points or when the spell ends. The swarms are friendly to you and your allies. Make one initiative roll for both swarms, which have their own turns. They obey verbal commands that you issue to them (no action required by you). If you don’t issue any commands to them, they defend themselves from hostile creatures but otherwise take no actions.",
};

SpellsList["conjure undead"] = {
    name : "Conjure undead",
    classes : ["druid", "cleric", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 177],
    level : 3,
    school : "Conj",
    time : "1 min", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a humanoid skull", 
    duration : "Conc, 1 h", 
    save : "Wis", 
    description : "Summon a shadow to do your bidding, has its own initiative, obeys commands",
    descriptionFull : "You summon a shadow to do your bidding. The creature appears in an unoccupied space that you can see within range. The creature is friendly to you and your allies for the duration. Roll initiative for the shadow, which has its own turns. It obeys any verbal commands that you issue to it (no action required by you). If you don’t issue any commands to the creature, it defends itself from hostile creatures but otherwise takes no actions. The shadow disappears when the spell ends." + AtHigherLevels + "When you cast this spell using a 4thlevel spell slot, you can choose to summon a wight or a shadow. When you cast this spell with a spell slot of 5th level or higher, you can choose to summon a ghost, a shadow, or a wight.",
};


SpellsList["consult the storm"] = {
    name : "Consult the Storm",
    classes : ["druid", "cleric"],   
    source : ["DM1", 177],
    level : 4,
    school : "Div", 
    time : "1 a", 
    range : "90 ft", 
    components : "V", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Ask 15 word question, get a truthful answer heard 600ft, 7d6 thunder dmg within 15 ft, save halves",
    descriptionFull : "You ask a question of an entity connected to storms, such as an elemental, a deity, or a primal spirit, and the entity replies with destructive fury. As part of the casting of the spell, you must speak a question consisting of fifteen words or fewer. Choose a point within range. A short, truthful answer to your question booms from that point. It can be heard clearly by any creature within 600 feet. Each creature within 15 feet of the point takes 7d6 thunder damage, or half as much damage with a successful Constitution saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th.",
};

SpellsList["control ice"] = {
    name : "Control ice",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 177],
    level : 5,
    school : "Trans",
    time : "1 a", 
    range : "300 ft", 
    components : "V,S,M", 
    compMaterial : "a cube of white wax", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "Control ice inside area 100ft cube, crack, reshape, thicken/thin ice, see b",
    descriptionFull : "Until the spell ends, you control any ice inside an area you choose within range that can be as large as a cube 100 feet on a side. You choose one of the following three effects when you cast this spell. As an action on each of your turns thereafter, you can use the same effect or choose a different one. Any alterations made to the ice remain after the spell ends, but can be altered by other effects (temperature, seismic action, or another application of this spell, for example). " + "\n   " + "Crack. You cause ice in the area to crack and splinter. On level terrain, this effect turns the ice into difficult terrain, possibly producing other hazards, depending on the terrain and the nature of the ice—ice over a deep chasm might open onto a pit, while ice over water can break into individual floes, for example. Using this effect on cliffs, walls, or ceilings made of ice can cause collapse, dealing 4d10 bludgeoning damage to creatures in the area below the collapse, or half the damage with a successful Dexterity saving throw. After such a collapse, the area where the fallen ice collects becomes difficult terrain. " + "\n   " + "Reshape. You cause ice in a portion of the area to rapidly melt, move, and re-form into whatever shape you command. You can block holes, open tunnels, form bridges, remove difficult terrain, or otherwise alter the form of the ice in the area. You can cause ice to become slippery, making it difficult terrain, or dry to remove difficult terrain. You can fill a hole up to a 20-foot cube or create 20 feet (up to 20 feet wide) of a bridge across a chasm or raise a 20-foot-tall pillar of ice (up to 20 feet square). You can continue this action on consecutive rounds to increase the size of the affected area while you maintain concentration on the spell. " + "\n   " + "Thicken/Thin. You cause existing ice to increase or decrease in thickness, up to 1 inch per round over some or all of the total area, either making the surface stronger or creating thin ice that is hazardous to walk on.",
};

SpellsList["creeping ice"] = {
    name : "Creeping ice",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 178],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "5ft square of ice, encases enemy within, 2d6 cold dmg at start of turn, can be broken out",
    descriptionFull : "You create a sheet of ice that covers a 5-foot square within range and lasts for the spell’s duration. The iced area is difficult terrain. A creature in the area where you cast the spell must make a successful Strength saving throw or be restrained by ice that rapidly encases it. A creature restrained by the ice takes 2d6 cold damage at the start of its turn. A restrained creature can use an action to make a Strength check against your spell save DC, freeing itself on a success, but it has disadvantage on this check. The creature can also be freed (and the spell ended) by dealing at least 20 damage to the ice. The restrained creature takes half the damage from any attacks against the ice." + AtHigherLevels + "When you cast this spell using a spell slot of 4th to 6th level, the area increases to a 10-foot square, the ice deals 4d6 cold damage, and 40 damage is needed to melt each 5-foot square. When you cast this spell using a spell slot of 7th level or higher, the area increases to a 20-foot square, the ice deals 6d6 cold damage, and 60 damage is needed to melt each 5-foot square.",
};

SpellsList["crushing trample"] = {
    name : "Crushing trample",
    classes : ["druid", "cleric", "ranger", "sorcerer"],   
    source : ["DM1", 179],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "1 rd", 
    save : "Str", 
    description : "move twice speed in straight line, trampling enemies of <= size, save or 4d6 bludg dmg + prone",
    descriptionFull : "Upon casting this spell, you are filled with a desire to overrun your foes. You immediately move up to twice your speed in a straight line, trampling every foe in your path that is of your size category or smaller. If you try to move through the space of an enemy whose size is larger than yours, your movement (and the spell) ends. Each enemy whose space you move through must make a successful Strength saving throw or be knocked prone and take 4d6 bludgeoning damage. If you have hooves, add your Strength modifier (minimum of +1) to the damage. You move through the spaces of foes whether or not they succeed on their Strength saving throws. You do not provoke opportunity attacks while moving under the effect of crushing trample.",
};

SpellsList["cure beast"] = {
    name : "Cure beast",
    classes : ["druid", "ranger"],   
    source : ["DM1", 180],
    level : 1,
    school : "Evoc", 
    time : "1 bns", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "1 crea save or ",
    descriptionFull : "A beast of your choice that you can see within range regains a number of hit points equal to 1d6 + your spellcasting modifier." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d6 for each slot level above 1st.",
};

SpellsList["curse of dust"] = {
    name : "Curse of dust",
    classes : ["druid", "cleric", "warlock"],   
    source : ["DM1", 1],
    level : 7,
    school : "Necro", 
    time : "10 m", 
    range : "500 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of spoiled food", 
    duration : "5 days", 
    save : "Con", 
    description : "Curse familiar creature, unsatiated by food, constant hunger, save every 24h or gain exhaustion",
    descriptionFull : "You cast a curse on a creature within range that you’re familiar with, causing it to be unsatiated by food no matter how much it eats. This effect isn’t merely an issue of perception; the target physically can’t draw sustenance from food. Within minutes after the spell is cast, the target feels constant hunger no matter how much food it consumes. The target must make a Constitution saving throw 24 hours after the spell is cast and every 24 hours thereafter. On a failed save, the target gains one level of exhaustion. The effect ends when the duration expires or when the target makes two consecutive successful saves.",
};

SpellsList["cynophobia"] = {
    name : "Cynophobia",
    classes : ["druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 182],
    level : 3,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a dog's tooth", 
    duration : "8 h", 
    save : "Wis", 
    description : "1 crea save or fear of canids, become frightened, disadv on checks and attk rolls while canids within 10ft",
    descriptionFull : "Choose a creature that you can see within range. The target must succeed on a Wisdom saving throw or develop an overriding fear of canids, such as dogs, wolves, foxes, and worgs. For the duration, the first time the target sees a canid, the target must succeed on a Wisdom saving throw or become frightened of that canid until the end of its next turn. Each time the target sees a different canid, it must make the saving throw. In addition, the target has disadvantage on ability checks and attack rolls while a canid is within 10 feet of it." + AtHigherLevels + "When you cast this spell using a 5th‑level spell slot, the duration is 24 hours. When you use a 7th-level spell slot, the duration is 1 month. When you use a spell slot of 8th or 9th level, the spell lasts until it is dispelled.", 
};

SpellsList["dark heraldry"] = {
    name : "Dark Heraldry",
    classes : ["druid", "warlock"],   
    source : ["DM1", 182],
    level : 3,
    school : "Necro", 
    time : "1 a", 
    range : "60 ft", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Creatures take 5d8 dmg and become frightened, save to take half damage and not frightened. See b",
    descriptionFull : "Dark entities herald your entry into combat, instilling a dread in your enemies. Designate a number of creatures up to your spellcasting ability modifier (minimum of one) that you can see within range and that have an alignment different from yours. Each of those creatures takes 5d8 psychic damage and becomes frightened of you; a creature that makes a successful Wisdom saving throw takes half as much damage and is not frightened. A creature frightened in this way repeats the saving throw at the end of each of its turns, ending the effect on itself on a success. The creature makes this saving throw with disadvantage if you can see it." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};

SpellsList["decay"] = {
    name : "Decay",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 184],
    level : 0,
    school : "Necro", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a handful of ash", 
    duration : "Instantaneous", 
    description : "Melee spell attk, 1d10 necro dmg. Tiny or small nonmagical objects take max dmg",
    descriptionFull : "Make a melee spell attack against a creature you touch. On a hit, the target takes 1d10 necrotic damage. If the target is a Tiny or Small nonmagical object that isn’t being worn or carried by a creature, it automatically takes maximum damage from the spell. This spell’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
	descriptionCantripDie : "Melee spell attk, `CD`d10 necro dmg. Tiny or small nonmagical objects take max dmg",
};

SpellsList["decelerate"] = {
    name : "Decelerate",
    classes : ["druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 184],
    level : 2,
    school : "Trans", 
    time : "1 a",  
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a toy top", 
    duration : "1 min", 
    save : "Wis", 
    description : "Slow crea speed to half movement, repeat save each turn, speed continues to halve",
    descriptionFull : "You slow the flow of time around a creature within range that you can see. The creature must make a successful Wisdom saving throw, or its walking speed is halved (round up to the nearest 5-foot increment). The creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. Until the spell ends, on a failed save the target’s speed is halved again at the start of each of your turns. For example, if a creature with a speed of 30 feet fails its initial saving throw, its speed drops to 15 feet. At the start of your next turn, the creature’s speed drops to 10 feet on a failed save, then to 5 feet on the following round on another failed save. Decelerate can’t reduce a creature’s speed to less than 5 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can affect an additional creature for each slot level above 2nd.",
};

SpellsList["deep breath"] = {
    name : "Deep breath",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 185],
    level : 1,
    school : "Trans", 
    time : "1 a",  
    range : "Touch", 
    components : "V,S", 
    duration : "2 h", 
    description : "Breathe normally in thin atmosphere, duration split between all crea touched",
    descriptionFull : "The recipient of this spell can breathe and function normally in thin atmosphere, suffering no ill effect at altitudes of up to 20,000 feet. If more than one creature is touched during the casting, the duration is divided evenly among all creatures touched." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 2 hours for each slot level above 1st.",
};

SpellsList["deep focus"] = {
    name : "Deep focus",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 184],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "1 min", 
	ritual : true, 
    description : "Next spell level 4 or lower cast within 1 min req conc will last without need for conc. ",
    descriptionFull : "You tap into ambient magical energy to stabilize and maintain a spell. The next spell you cast that normally requires concentration will last its full normal duration without the need for concentration, as long as it is cast within 1 minute of your casting of this spell, and the spell to be affected is of 4th level or lower. At the end of the duration, or if 1 minute goes by without your casting a spell that requires concentration, the spell ends." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can affect any spell you can cast that requires concentration and is up to one level higher than the spell slot you used to cast deep focus.",
};

SpellsList["defensive quills"] = {
    name : "Defensive quills",
    classes : ["druid", "ranger"],   
    source : ["DM1", 184],
    level : 3,
    school : "Trans", 
    time : "1 a",  
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a porcupine’s quill)", 
    duration : "10 min", 
    description : "Quills grow on skin, +1 to AC, light attks take 2d8 piercing dmg, grappling/swallowing you takes dmg",
    descriptionFull : "Sharp quills grow from your skin. You can end the spell early by using an action to dismiss it. You gain a +1 bonus to AC for the duration. If a creature hits you with an attack made by a light weapon, a natural attack, or an unarmed strike, it takes 2d8 piercing damage from your quills. A creature that grapples you takes damage from the quills at the beginning of each of its turns in which it is grappling you. If a creature swallows you, it takes damage from the quills each round at the start of your turn.",
};

SpellsList["desiccating breath"] = {
    name : "Desiccating breath",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 186],
    level : 4,
    school : "Evoc", 
    time : "1 a", 
    range : "S:15-ft cone", 
    components : "V,S,M", 
    compMaterial : "a clump of dried clay", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Draw moisture from the air, save or 4d10 necro dmg, increase to 6d10 if plants",
    descriptionFull : "You spew forth a cloud of black dust that draws all moisture from a 30-foot cone. Each animal in the cone takes 4d10 necrotic damage, or half as much damage if it makes a successful Constitution saving throw. The damage is 6d10 for plants and plant creatures, also halved on a successful Constitution saving throw.",
};

SpellsList["detect dragons"] = {
    name : "Detect dragons",
    classes : ["druid", "bard", "sorcerer", "wizard"],   
    source : ["DM1", 186],
    level : 2,
    school : "Div", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    description : "Detect presence of dragons/draconic creatures in line of sight up to 120ft, arcana check to learn details,",
    descriptionFull : "You can detect the presence of dragons and other draconic creatures within your line of sight and 120 feet, regardless of disguises, illusions, and alteration magic such as polymorph. The information you uncover depends on the number of consecutive rounds you spend an action studying a subject or area. On the first round of examination, you detect whether any draconic creatures are present, but not their number, location, identity, or type. On the second round, you learn the number of such creatures as well as the general condition of the most powerful one. On the third and subsequent rounds, you make a DC 15 Intelligence (Arcana) check; if it succeeds, you learn the age, type, and location of one draconic creature. Note that the spell provides no information on the turn in which it is cast, unless you have the means to take a second action that turn.",
};

SpellsList["disruptive aura"] = {
    name : "Disruptive aura",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 187],
    level : 8,
    school : "Evoc", 
    time : "1 a", 
    range : "150 ft", 
    components : "V,S",  
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Aura outlines crea in 100ft cube, invis/hidden crea outlined, spells/magic items req wis save",
    descriptionFull : "A warping, prismatic aura surrounds and outlines each creature inside a 10-foot cube within range. The aura sheds dim light out to 10 feet, and the locations of hidden or invisible creatures are outlined. If a creature in the area tries to cast a spell or use a magic item, it must make a Wisdom saving throw. On a successful save, the spell or item functions normally. On a failed save, the effect of the spell or the item is suppressed for the duration of the aura. Time spent suppressed counts against the duration of the spell’s or item’s effect." + AtHigherLevels + "When you cast this spell using a 9th‑level spell slot, the cube is 20 feet on a side.",
};

SpellsList["distraction cascade"] = {
    name : "Distraction cascade",
    classes : ["druid", "bard", "cleric", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 187],
    level : 2,
    school : "Div", 
    time : "1 a", 
	timeFull : "1 reaction, which you take when an ally declares an attack against an enemy you can see", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Cha", 
    description : "Throw foe off balance,attacks against crea made with advantage until end of turn",
    descriptionFull : "With a flash of foresight, you throw a foe off balance. Choose one creature you can see that your ally has just declared as the target of an attack. Unless that creature makes a successful Charisma saving throw, attacks against it are made with advantage until the end of this turn.",
};

SpellsList["draconic smite"] = {
    name : "Draconic smite",
    classes : ["druid", "paladin"],   
    source : ["DM1", 188],
    level : 1,
    school : "Evoc", 
    time : "1 bns", 
    range : "Self", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Next melee weapon attack deals extra 1d6 cold dmg, up to 4 crea within 30ft con save or 1d6 cold dmg",
    descriptionFull : "The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon takes on the form of a silver dragon’s head. Your attack deals an extra 1d6 cold damage, and up to four other creatures of your choosing within 30 feet of the attack’s target must each make a successful Constitution saving throw or take 1d6 cold damage." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the extra cold damage and the cold damage dealt to the secondary creatures increases by 1d6 for each slot level above 1st.",
};

SpellsList["drown"] = {
    name : "Drown",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 189],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "90 ft", 
    components : "V,S,M", 
    compMaterial : "a small piece of flotsam or seaweed", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Fill a crea lungs with seawater, save or suffocate, cant speak, survive #rounds = con mod",
    descriptionFull : "You cause a creature’s lungs to fill with seawater. Unless the target makes a successful Constitution saving throw, it immediately begins suffocating. A suffocating creature can’t speak or perform verbal spell components. It can hold its breath, and thereafter can survive for a number of rounds equal to its Constitution modifier (minimum of 1 round), after which it drops to 0 hit points and is dying. Huge or larger creatures are unaffected, as are creatures that can breathe water or that don’t require air. A suffocating (not dying) creature can repeat the saving throw at the end of each of its turns, ending the effect on a success." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.",
};

SpellsList["dryads kiss"] = {
    name : "Dryad’s kiss",
    classes : ["druid"],   
    source : ["DM1", 189],
    level : 3,
    school : "Conj", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,M", 
    compMaterial : "a flower petal or a drop of blood)", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Cover crea in buds, 2d8 necro dmg, additional damage from other sources extra 1d8 dmg see b",
    descriptionFull : "You perform an ancient incantation that summons flora from the fey realm. A creature you can see within range is covered with small, purple buds and takes 3d8 necrotic damage; a successful Wisdom saving throw negates the damage but doesn’t prevent the plant growth. The buds can be removed by the target or an ally of the target within 5 feet who uses an action to make a successful Intelligence (Nature) or Wisdom (Medicine) check against your spell save DC, or by a greater restoration or blight spell. While the buds remain, whenever the target takes damage from a source other than this spell, one bud blossoms into a purple and yellow flower that deals an extra 1d8 necrotic damage to the target. Once four blossoms have formed in this way, the buds can no longer be removed by nonmagical means. The buds and blossoms wilt and fall away when the spell ends, provided the creature is still alive. " + "\n   " + "If a creature affected by this spell dies, sweet-smelling blossoms quickly cover its body. The flowers wilt and die after one month." + AtHigherLevels + "If this spell is cast using a spell slot of 5th level or higher, the number of targets increases by one for every two slot levels above 3rd.",
};

SpellsList["ears of the bat"] = {
    name : "Ears of the bat",
    classes : ["druid", "warlock"],   
    source : ["DM1", 190],
    level : 3,
    school : "Trans",
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a bit of bat fur", 
    duration : "Conc, 1 h", 
    description : "Gain keen hearing + echolocation, adv on wis(percp) chks, blindsight 60ft, disadv on thunder dmg saves",
    descriptionFull : "You gain the keen hearing and echolocation abilities of a bat. For the duration of the spell, you have advantage on Wisdom (Perception) checks that rely on hearing, and you gain blindsight out to a range of 60 feet." + "\n   " + "You cannot use the blindsight ability while deafened. While the spell is in effect, you have disadvantage on saving throws against spells and effects that deal thunder damage.",
};

SpellsList["earth wave"] = {
    name : "Earth Wave",
    classes : ["druid"],   
    source : ["DM1", 190],
    level : 5,
    school : "Trans", 
    time : "1 a", 
    range : "S:15", 
    components : "V,S", 
    duration : "Conc, 8 h", 
    save : "Dex", 
    description : "Command earth, carries you and companions, bludgeons/buries enemies and small structures, see b",
    descriptionFull : "You command the earth beneath your feet to rise and surge forward, carrying you and your companions where you bid while rolling over enemies and obstacles in your path. The earth rises in a 15-foot-high, 15-foot‑radius swell that can carry you and up to eight other Medium creatures, propelling you in whatever direction you choose at a rate of up to 90 feet per round. You use a bonus action to direct the wave each round. Your movement is limited to the surface of the wave to maintain control. If you move off the wave, it continues on the same course you directed it, then the spell ends at the beginning of your next turn. Natural obstacles do not impede the spell’s movement; trees, rocks, and other natural obstacles simply rise up and around the swell and settle back into place behind it. The wave can travel up or down natural slopes with angles as great as 60 degrees. You can direct the wave to surge over man-made obstacles and creatures in its path. The swell washes over walls and other manufactured obstacles up to 15 feet high and 10 feet thick with no loss of movement, dealing 6d6 bludgeoning damage to an object as it passes. Resolve this damage against larger, rigid objects, such as walls, vehicles, or other similar structures; smaller or malleable objects such as unsecured ropes or cloth are simply buried by the swell’s passing. Larger objects are subject to the damage, but the wave cannot move over them unless the damage is enough to destroy the object. Creatures of Large size or smaller in the path of the wave take 6d6 bludgeoning damage and are buried. Buried creatures are considered restrained and must hold their breath or begin to suffocate. A creature in the path of the wave can make a Dexterity saving throw against your spell save DC. On a successful save, the creature takes half as much damage and avoids being buried. Each round, a buried creature can use an action to make a Strength check against your spell save DC to dig itself out. You can cast earth wave only when standing on natural earth or stone. The spell can be cast underground, but not inside buildings unless they have no floor.",
};

SpellsList["eidetic memory"] = {
    name : "Eidetic memory",
    classes : ["druid", "bard", "cleric", "wizard"],   
    source : ["DM1", 191],
    level : 5,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a string tied in a knot", 
    duration : "Conc, 1 h", 
    description : "Recall any information you ever read/heard, +10 bns on intelligence checks",
    descriptionFull : "When you cast this spell, you can recall any piece of information you’ve ever read or heard in the past. This ability translates into a +10 bonus on Intelligence checks for the duration of the spell.",

};

SpellsList["elemental horns"] = {
    name : "Elemental horns",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 192],
    level : 2,
    school : "Evoc",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a brass wand", 
    duration : "Conc, 1 min", 
    description : "Horned crea gains additional +3d6 elemental bonus acid/cold/fire/lightn/rad to gore attacks",
    descriptionFull : "The target of this spell must be a creature that has horns, or the spell fails. Elemental horns causes the touched creature’s horns to crackle with elemental energy. Select one of the following energy types when casting this spell: acid, cold, fire, lightning, or radiant. The creature’s gore attack deals 3d6 damage of the chosen type in addition to any other damage the attack normally deals. Although commonly seen among tieflings and minotaurs, this spell is rarely employed by other races." + "\n   " + "more text" + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d6 for each slot level above 2nd.",
};

SpellsList["energy absorption"] = {
    name : "Energy absorption",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 193],
    level : 5,
    school : "Abjur",
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Crea gains resistance to acid/cold/fire/force/lightn/thdr dmg, if crea unwilling see b",
    descriptionFull : "A creature you touch has resistance to acid, cold, fire, force, lightning, and thunder damage until the spell ends." + "\n   " + "If the spell is used against an unwilling  creature, you must make a melee spell attack with a reach of 5 feet. If the attack hits, for the duration of the spell the affected creature must make a saving throw using its spellcasting ability whenever it casts a spell that deals one of the given damage types. On a failed save, the spell is not cast but its slot is expended; on a successful save, the spell is cast but its damage is halved before applying the effects of saving throws, resistance, and other factors.",
};

SpellsList["energy foreknowledge"] = {
    name : "Energy foreknowledge",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 193],
    level : 4,
    school : "Div",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when you are the target of a spell that deals cold, fire, force, lightning, necrotic, psychic, radiant, or thunder damage", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Gain resistance to all energy types of the spell hitting you, until end of next turn",
    descriptionFull : "When you cast this spell, you gain resistance to every type of energy listed above that is dealt by the spell hitting you. This resistance lasts until the end of your next turn." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you can include one additional ally in its effect for each slot level above 4th. Affected allies must be within 15 feet of you.",
};

SpellsList["exceptional wit"] = {
    name : "Exceptional wit",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 194],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : " Willing crea you touch can add 1d6 to intelligence check of their choice",
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Intelligence check of its choice. It can roll the die before or after making the check. The spell then ends.",
};

SpellsList["fault line"] = {
    name : "Fault line",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 195],
    level : 6,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft line", 
    components : "V,S", 
    duration : "Permanent", 
    save : "Wis", 
    description : "Ground thrusts up in 60x5ft line, diff terrain, crea in area 8d6 bludg dmg, save or knocked prone",
    descriptionFull : "The ground thrusts sharply upward along a 5-foot-wide, 60‑foot-long line that you designate. All spaces affected by the spell become difficult terrain. In addition, all creatures in the affected area are knocked prone and take 8d6 bludgeoning damage. Creatures that make a successful Dexterity saving throw take half as much damage and are not knocked prone. This spell doesn’t damage permanent structures.",
};

SpellsList["feather field"] = {
    name : "Feather field",
    classes : ["druid", "ranger", "warlock", "wizard"],   
    source : ["DM1", 195],
    level : 1,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "fletching from an arrow", 
    duration : "1 rd", 
    description : "Chaff barrier of feathers gives +5 to AC against ranged attacks by magic weapons",
    descriptionFull : "A magical barrier of chaff in the form of feathers appears and protects you. Until the start of your next turn, you have a +5 bonus to AC against ranged attacks by magic weapons." + AtHigherLevels + "When you cast feather field using a spell slot of 2nd level or higher, the duration is increased by 1 round for each slot level above 1st.",
};

SpellsList["feather travel"] = {
    name : "Feather travel",
    classes : ["druid", "wizard"],   
    source : ["DM1", 196],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,M", 
    compMaterial : "a feather", 
    duration : "Conc, 1 h", 
    description : "Targt transforms into feather, move in direction of wind, make small 5ft movements to aim per rd",
    descriptionFull : "The target of feather travel (along with its clothing and other gear) transforms into a feather and drifts on the wind. The drifting creature has a limited ability to control its travel. It can move only in the direction the wind is blowing and at the speed of the wind. It can, however, shift up, down, or sideways 5 feet per round as if caught by a gust, allowing the creature to aim for an open window or doorway, to avoid a flame, or to steer around an animal or another creature. When the spell ends, the feather settles gently to the ground and transforms back into the original creature." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, two additional creatures can be transformed per slot level above 2nd.",
};

SpellsList["fey crown"] = {
    name : "Fey Crown",
    classes : ["druid", "bard", "ranger", "warlock"],   
    source : ["DM1", 196],
    level : 5,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "five flowers of different colors", 
    duration : "1 h", 
    description : "crown of 5 flowers, adv on spell saves, immune to charm. As bns, choose crea to turn invisible see book",
    descriptionFull : "By channeling the ancient wards of the Seelie Court, you create a crown of five flowers on your head. While wearing this crown, you have advantage on saving throws against spells and other magical effects and are immune to being charmed. As a bonus action, you can choose a creature within 30 feet of you (including yourself). Until the end of its next turn, the chosen creature is invisible and has advantage on saving throws against spells and other magical effects. Each time a chosen creature becomes invisible, one of the blossoms in the crown closes. After the last of the blossoms closes, the spell ends at the start of your next turn and the crown disappears." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the crown can have one additional flower for each slot level above 5th. One additional flower is required as a material component for each additional flower in the crown.",
};

SpellsList["fire darts"] = {
    name : "Fire darts",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 197],
    level : 2,
    school : "Evoc",
    time : "1 a", 
    range : "20 ft", 
    components : "V,S,M", 
    compMaterial : "fire the size of a small campfire or larger", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "3 darts of flamee shoot from fire to crea/s in 30ft, 4d6 fire dmg per dart",
    descriptionFull : "When this spell is cast on any fire that’s at least as large as a small campfire or cooking fire, three darts of flame shoot out from the fire toward creatures within 30 feet of the fire. Darts can be directed against the same or separate targets as the caster chooses. Each dart deals 4d6 fire damage, or half as much damage if its target makes a successful Dexterity saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["fire under the tongue"] = {
    name : "Fire under the tongue",
    classes : ["druid", "ranger", "warlock", "wizard"],   
    source : ["DM1", 197],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "5 ft", 
    components : "V,S", 
    duration : "24 h", 
    description : "Ingest nonmagical fire, stored harmlessly in mouth, spit it out as an action, 1d6/2d6 dmg sml/lrg fire.",
    descriptionFull : "You can ingest a nonmagical fire up to the size of a normal campfire that is within range. The fire is stored harmlessly in your mouth and dissipates without effect if it is not used before the spell ends. You can spit out the stored fire as an action. If you try to hit a particular target, then treat this as a ranged attack with a range of 5 feet. Campfire-sized flames deal 2d6 fire damage, while torch-sized flames deal 1d6 fire damage. Once you have spit it out, the fire goes out immediately unless it hits flammable material that can keep it fed.",
};

SpellsList["firewalk"] = {
    name : "Firewalk ",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 197],
    level : 6,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    description : "Crea gains immunity to fire dmg, can walk on the top of flames as if they were solid.",
    descriptionFull : "The creature you cast firewalk on becomes immune to fire damage. In addition, that creature can walk along any burning surface, such as a burning wall or burning oil spread on water, as if it were solid and horizontal. Even if there is no other surface to walk on, the creature can walk along the tops of the flames." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, two additional creatures can be affected for each slot level above 6th.",
};

SpellsList["flurry"] = {
    name : "Flurry",
    classes : ["druid", "cleric", "ranger", "warlock"],   
    source : ["DM1", 199],
    level : 1,
    school : "Trans", 
    time : "1 bns", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a fleck of quartz", 
    duration : "1 rd", 
    description : "Snow surrounds 5ft rad, all (including you) have disadv on percep checks and attk rolls",
    descriptionFull : "A flurry of snow surrounds you and extends to a 5-foot radius around you. While it lasts, anyone trying to see into, out of, or through the affected area (including you) has disadvantage on Wisdom (Perception) checks and attack rolls.",
};

SpellsList["forest affinity"] = {
    name : "Forest affinity",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 199],
    level : 1,
    school : "Illus",
    time : "1 a", 
    range : "Self", 
    components : "S,M", 
    compMaterial : "a raven’s feather or a bit of panther fur", 
    duration : "Conc, 1 h", 
    description : "Forest welcomes you, gain adv on stealth checks to hide, while hidden in forest gain adv on next initiative roll",
    descriptionFull : "The forest floor swirls and shifts around you, welcoming you into its embrace. While in a forest, you have advantage on Dexterity (Stealth) checks to hide. While hidden in a forest, you have advantage on your next initiative roll. The spell ends if you attack or cast a spell." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can affect one additional creature for each slot level above 1st. The spell ends if you or any other target of this spell attacks or casts a spell.",
};

SpellsList["forest native"] = {
    name : "Forest native",
    classes : ["druid"],   
    source : ["DM1", 199],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a clump of soil from a forest", 
    duration : "1 h", 
    description : "Create bond willing crea and environment, not hindered by diff terr, adv on saves against env effects.",
    descriptionFull : "While in a forest, you touch a willing creature and infuse it with the forest’s energy, creating a bond between the creature and the environment. For the duration of the spell, as long as the creature remains within the forest, its movement is not hindered by difficult terrain composed of natural vegetation. In addition, the creature has advantage on saving throws against environmental effects such as excessive heat or cold or high altitude.",
};

SpellsList["forest of spears"] = {
    name : "Forest of Spears",
    classes : ["druid", "wizard"],   
    source : ["DM1", 199],
    level : 5,
    school : "Evoc", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,S,M", 
    compMaterial : "a sliver of stone", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "crea in range save or 5d8 piercing dmg and restrained, save halves, area difficult terrain",
    descriptionFull : "A forest of stone spears rises up from the ground in a 30‑foot radius around a point you designate within range. Creatures in the area take 5d8 piercing damage and are restrained. A successful Dexterity saving throw reduces the damage by half and negates the restrained condition. A creature that starts its turn in the area and is already restrained by the spears takes an extra 2d8 damage from the pain of being held aloft as well as bleeding from its wounds. A creature restrained by the spears can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a successful save, it frees itself. For the duration of the spell, the area is difficult terrain. The spears (AC 14) can be damaged; they are immune to piercing damage and have resistance to bludgeoning and slashing damage from nonmagical attacks. If a 5-foot‑square section of spears takes 15 damage, that’s enough to free a restrained creature or clear the section of spears.",
};

SpellsList["forest sanctuary"] = {
    name : "Forest sanctuary",
    classes : ["druid"],   
    source : ["DM1", 200],
    level : 9,
    school : "Abjur",
    time : "1 a", 
    range : "300 ft", 
    components : "V,S,M", 
    compMaterial : "a bowl of fresh rainwater and a tree branch", 
    duration : "24 h", 
    description : "200ft cube protected from nonmagic & magic storms/winds/floods, etc see book",
    descriptionFull : "While in a forest, you create a protective, 200-foot cube centered on a point you can see within range. The atmosphere inside the cube has the lighting, temperature, and moisture that is most ideal for the forest, regardless of the lighting or weather outside the area. The cube is transparent, and creatures and objects can move freely through it. The cube protects the area inside it from storms, strong winds, and floods, including those created by magic such as control weather, control water, or meteor swarm. Such spells can’t be cast while the spellcaster is in the cube." + "\n   " + "You can create a permanently protected area by casting this spell at the same location every day for one year.",
};

SpellsList["fortitude"] = {
    name : "Fortitude",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 201],
    level : 0,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "Willing crea can roll a d6, add result to con check of their choice.",
    descriptionFull : "You touch a willing creature. Once before the spell ends, the target can roll a d6 and add the result to one Constitution check of its choice. It can roll the die before or after making the check. The spell then ends.",
};

SpellsList["frailty"] = {
    name : "Frailty",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 201],
    level : 0,
    school : "Necro", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Con", 
    description : "Crea save or subtract 1d6 from result of next con check",
    descriptionFull : "You temporarily inhibit the vital force of a creature within range. If the target makes a successful Constitution saving throw, the spell is ineffective. On a failed save, the next time the creature makes a Constitution check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["freeze potion"] = {
    name : "Freeze potion",
    classes : ["druid", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 201],
    level : 1,
    school : "Trans",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when which you take when you see a creature within range about to consume a liquid", 
    range : "25 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Freeze a drinking container of liquid instantly freezing the contents, cant be consumed.",
    descriptionFull : "A blue spark flies from your hand and strikes a potion vial, drinking horn, waterskin, or similar container, instantly freezing the contents. The substance melts normally thereafter and is not otherwise harmed, but it can’t be consumed while it’s frozen." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the range increases by 5 feet for each slot level above 1st.",
};


SpellsList["freezing fog"] = {
    name : "Freezing fog",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 201],
    level : 3,
    school : "Conj", 
    time : "1 a", 
    range : "100 ft", 
    components : "V,S", 
    duration : "Conc, 5 min", 
    save : "Con", 
    description : "20ft rad sphere of mist, area heavily obscured, save each turn or 2d6 cold dmg and 1 lvl exhaustion",
    descriptionFull : "The spell creates a 20-foot-radius sphere of mist similar to a fog cloud spell centered on a point you can see within range. The cloud spreads around corners, and the area it occupies is heavily obscured. A wind of moderate or greater velocity (at least 10 miles per hour) disperses it in 1 round. The fog is freezing cold; any creature that ends its turn in the area must make a Constitution saving throw. It takes 2d6 cold damage and gains one level of exhaustion on a failed save, or takes half as much damage and no exhaustion on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["furious hooves"] = {
    name : "Furious hooves",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 202],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a nail", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Enhance feet of 1 crea, double walking speed, gain 2 hoof attacks, each does 1d6 + str bludg dmg",
    descriptionFull : "You enhance the feet or hooves of a creature you touch, imbuing it with power and swiftness. The target doubles its walking speed or increases it by 30 feet, whichever addition is smaller. In addition to any attacks the creature can normally make, this spell grants two hoof attacks, each of which deals bludgeoning damage equal to 1d6 + plus the target’s Strength modifier (or 1d8 if the target of the spell is Large). For the duration of the spell, the affected creature automatically deals this bludgeoning damage to the target of its successful shove attack.",
};

SpellsList["gird the spirit"] = {
    name : "Gird the spirit",
    classes : ["druid", "cleric", "paladin"],   
    source : ["DM1", 204],
    level : 1,
    school : "Abjur", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when you or a creature within 30 feet of you is hit by an attack from an undead creature", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Wis", 
    description : "Gain immunity from lifesapping energy, prevent reduction in ability scores or HP max",
    descriptionFull : "Your magic protects the target creature from the lifesapping energies of the undead. For the duration, the target has immunity to effects from undead creatures that reduce its ability scores, such as a shadow’s Strength Drain, or its hit point maximum, such as a specter’s Life Drain. This spell doesn’t prevent damage from those attacks; it prevents only the reduction in ability score or hit point maximum.",
};

SpellsList["glacial fog"] = {
    name : "Glacial fog",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 204],
    level : 7,
    school : "Evoc", 
    time : "1 a", 
    range : "100 ft", 
    components : "V,S,M", 
    compMaterial : "crystalline statue of a polar bear worth at least 25 gp", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "30ft rad sphere of fog, save or 12d6 cold dmg, +1 exhaustion, disadv on percep checks, see b",
    descriptionFull : "As you cast this spell, a 30-foot-radius sphere centered on a point within range becomes covered in a frigid fog. Each creature that is in the area at the start of its turn while the spell remains in effect must make a Constitution saving throw. On a failed save, a creature takes 12d6 cold damage and gains one level of exhaustion, and it has disadvantage on Perception checks until the start of its next turn. On a successful save, the creature takes half the damage and ignores the other effects." + "\n   " + "Stored devices and tools are all frozen by the fog: crossbow mechanisms become sluggish, weapons are stuck in scabbards, potions turn to ice, bag cords freeze together, and so forth. Such items require the application of heat for 1 round or longer in order to become useful again." + AtHigherLevels + "When you cast this spell using a spell slot of 8th level or higher, the damage increases by 1d6 for each slot level above 7th.",
};

SpellsList["gliding step"] = {
    name : "Gliding step",
    classes : ["druid", "ranger"],   
    source : ["DM1", 205],
    level : 1,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "10 min", 
    description : "Walk on surface of snow or ice, will support your weight and not hinder movement",
    descriptionFull : "Provided you’re not carrying more of a load than your carrying capacity permits, you can walk on the surface of snow rather than wading through it, and you ignore its effect on movement. Ice supports your weight no matter how thin it is, and you can travel on ice as if you were wearing ice skates. You still leave tracks normally while under these effects." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the duration increases by 10 minutes for each slot level above 1st.",
};

SpellsList["goats hoof charm"] = {
    name : "Goat’s hoof charm",
    classes : ["druid", "ranger", "sorcerer", "wizard"],   
    source : ["DM1", 205],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a goat’s hoof", 
    duration : "1 min", 
    description : "Target climbs slopes, +2 bns on dex checks and saves o prevent falling or balance on narrow ledge",
    descriptionFull : "A creature you touch traverses craggy slopes with the surefootedness of a mountain goat. When ascending a slope that would normally be difficult terrain for it, the target can move at its full speed instead. The target also gains a +2 bonus on Dexterity checks and saving throws to prevent falling, to catch a ledge or otherwise stop a fall, or to move along a narrow ledge." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, you can increase the duration by 1 minute, or you can affect one additional creature, for each slot level above 1st.",
};

SpellsList["going in circles"] = {
    name : "Going in circles",
    classes : ["druid", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 206],
    level : 3,
    school : "Illus", 
    time : "10 min", 
    range : "Sight", 
    components : "V,S,M", 
    compMaterial : "a piece of the target terrain", 
    duration : "24 h", 
    description : "Make 1-mile cube of natural terrain difficult to traverse and navigate, see book",
    descriptionFull : "You make natural terrain in a 1-mile cube difficult to traverse. A creature in the affected area has disadvantage on Wisdom (Survival) checks to follow tracks or travel safely through the area, as paths through the terrain seem to twist and turn nonsensically. The terrain itself isn’t changed, only the perception of those inside it. A creature that succeeds on two Wisdom (Survival) checks while in the terrain discerns the illusion for what it is and sees the illusory twists and turns superimposed on the terrain. A creature that reenters the area after exiting it before the spell ends is affected by the spell even if it previously succeeded in traversing the terrain. A creature with truesight can see through the illusion and is unaffected by the spell. A creature that casts find the path automatically succeeds in discovering a way out of the terrain. When you cast this spell, you can designate a password. A creature that speaks the word as it enters the area automatically sees the illusion and is unaffected by the spell. If you cast this spell on the same spot every day for one year, the illusion lasts until it is dispelled.",
};

SpellsList["gordolays pleasant aroma"] = {
    name : "Gordolay’s pleasant aroma",
	nameShort : "Gordo. pleasant aroma",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 206],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "120 ft", 
    components : "S,M", 
    compMaterial : "a few flower petals or a piece of fruit, which the spell consumes", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Intoxicating smell distracts enemies save or next attack made with disadv",
    descriptionFull : "You create an intoxicating aroma that fills the area within 30 feet of a point you can see within range. Creatures in this area smell something they find so pleasing that it’s distracting. Each creature in the area that makes an attack roll must first make a Wisdom saving throw; on a failed save, the attack is made with disadvantage. Only a creature’s first attack in a round is affected this way; subsequent attacks are resolved normally. On a successful save, a creature becomes immune to the effect of this particular scent, but they can be affected again by a new casting of the spell.",
};

SpellsList["green mantle"] = {
    name : "Green Mantle",
    classes : ["druid", "ranger"],   
    source : ["DM1", 208],
    level : 1,
    school : "Trans",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a plant from the surrounding terrain", 
    duration : "1 h", 
    description : "Gain physical characteristics of terrain, +2 bonus to stealth checks",
    descriptionFull : "You take on the physical characteristics of the terrain around you. In a forest, grass and tiny mushrooms sprout in your hair, moss beards your chin, and your ﬂesh takes on the mottled hue of leaf green and bark brown. In an arctic grassland, gray lichens and the various shades of boreal grasses cloak your presence. This effect provides a +2 bonus to Stealth checks in the appropriate terrain." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, one additional creature is affected for each slot level above 1st.",
};

SpellsList["hunting stand"] = {
    name : "Hunting Stand",
    classes : ["druid", "ranger"],   
    source : ["DM1", 213],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,S,M", 
    compMaterial : "a crude model of the stand", 
    duration : "8 h", 
    description : "Make shelter in a tree, hold up to 9 crea, disadv on checks to spot the shelter",
    descriptionFull : "You make a camouflaged shelter nestled in the branches of a tree or among a collection of stones. The shelter is a 10-foot cube centered on a point within range. It can hold as many as nine Medium or smaller creatures. The atmosphere inside the shelter is comfortable and dry, regardless of the weather outside. The shelter’s camouflage provides a modicum of concealment to its inhabitants; a creature outside the shelter has disadvantage on Wisdom (Perception) and Intelligence (Investigation) checks to detect or locate a creature within the shelter.",
};

SpellsList["ice burn"] = {
    name : "Ice Burn",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 213],
    level : 3,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Ranged spell attk, 3d10 cold dmg, disadv on all dex checks and saves until dmg healed.",
    descriptionFull : "You instill deep cold into the body of a creature within range, damaging it and impairing joints and muscles. Make a ranged spell attack. On a hit, the target takes 3d10 cold damage and has disadvantage on all Dexterity checks and Dexterity saving throws until this damage is healed." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature within range for each slot level above 3rd. Each additional target must be within 30 feet of at least one other target.",
};

SpellsList["illuminate spoor"] = {
    name : "Illuminate Spoor",
    classes : ["druid", "ranger"],   
    source : ["DM1", 215],
    level : 1,
    school : "Div", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a firefly", 
    duration : "Conc, 1 h", 
    description : "Illuminate a set of tracks, crea you designate that see the glow auto succeed on checks to track.",
    descriptionFull : "You touch a set of tracks created by a single creature. That set of tracks and all other tracks made by the same creature give off a faint glow. You and up to three creatures you designate when you cast this spell can see the glow. A creature that can see the glow automatically succeeds on Wisdom (Survival) checks to track that creature. If the tracks are covered by obscuring objects such as leaves or mud, you and the creatures you designate have advantage on Wisdom (Survival) checks to follow the tracks. If the creature leaving the tracks changes its tracks, such as by adding or removing footwear, the glow stops where the tracks change. Until the spell ends, you can use an action to touch and illuminate a new set of tracks." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the duration is concentration, up to 8 hours. When you use a spell slot of 5th level or higher, the duration is concentration, up to 24 hours.",
};

SpellsList["intensify light"] = {
    name : "Intensify Light",
    classes : ["druid", "cleric", "paladin", "ranger"],   
    source : ["DM1", 218],
    level : 2,
    school : "Trans",
    time : "1 a", 
    range : "S:15-ft rad", 
    components : "V,S,M", 
    compMaterial : "scale from a light drake", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "When in range of light source, sheds bright light for additional 10ft.",
    descriptionFull : "When you are within range of a light source, that source of light sheds bright light and dim light for an additional 10 feet. If the object sheds light from the daylight spell, the light within 10 feet of the object is considered sunlight. If you move out of range of the light source, it immediately reverts to its normal illumination.",
};

SpellsList["legion of rabid squirrels"] = {
    name : "Legion of Rabid Squirrels",
    classes : ["druid", "bard", "ranger"],   
    source : ["DM1", 223],
    level : 3,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "an acorn or nut", 
    duration : "Conc, 1 min", 
    description : "Call legion of rabid squirrels, use swarm of poisonous snakes stats, DC10 con save or 4d6 poison dmg",
    descriptionFull : "While in a forest, you call a legion of rabid squirrels to descend from the nearby trees at a point you can see within range. The squirrels form into a swarm that uses the statistics of a swarm of poisonous snakes, except it has a climbing speed of 30 feet rather than a swimming speed. The legion of squirrels is friendly to you and your companions. Roll initiative for the legion, which has its own turns. The legion of squirrels obeys your verbal commands (no action required by you). If you don’t issue any commands to the legion, it defends itself from hostile creatures but otherwise takes no actions. If you command it to move farther than 60 feet from you, the spell ends and the legion disperses back into the forest. A canid, such as a dog, wolf, fox, or worg, has disadvantage on attack rolls against targets other than the legion of rabid squirrels while the swarm is within 60 feet of the creature. When the spell ends, the squirrels disperse back into the forest." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the legion’s poison damage increases by 1d6 for each slot level above 3rd.",
};

SpellsList["life sense"] = {
    name : "Life Sense",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 223],
    level : 3,
    school : "Div",
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a clear piece of quartz", 
    duration : "Conc, 10 min", 
    save : "Cha", 
    description : "Sense location of alide crea within 30ft, crea hiding from me make cha save to stay hidden.",
    descriptionFull : "For the duration, you can sense the location of any creature that isn’t a construct or an undead within 30 feet of you, regardless of impediments to your other senses. This spell doesn’t sense creatures that are dead. A creature trying to hide its life force from you can make a Charisma saving throw. On a success, you can’t sense the creature with this casting of the spell. If you cast the spell again, the creature must make the saving throw again to remain hidden from your senses.",
};

SpellsList["looping trail"] = {
    name : "Looping Trail",
    classes : ["druid",  "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 225],
    level : 4,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a piece of rope twisted into a loop", 
    duration : "8 h", 
    save : "Wis", 
    description : "Touch a trail, reconfigure it to loop back on itself, gives impression of forward progression, wis(surv) to notice.",
    descriptionFull : "You touch a trail no more than 1 mile in length, reconfiguring it to give it switchbacks and curves that make the trail loop back on itself. For the duration, the trail makes subtle changes in its configuration and in the surrounding environment to give the impression of forward progression along a continuous path. A creature on the trail must succeed on a Wisdom (Survival) check to notice that the trail is leading it in a closed loop.",
};

SpellsList["maim"] = {
    name : "Maim",
    classes : ["druid", "bard", "sorcerer", "wizard"],   
    source : ["DM1", 226],
    level : 5,
    school : "Necro", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Wis", 
    description : "Hands become black claws, melee spell attk, 4d6 necrotic dmg, choose body/upper/lower limb, see b",
    descriptionFull : "Your hands become black claws bathed in necrotic energy. Make a melee spell attack against a creature you can reach. On a hit, the target takes 4d6 necrotic damage and a section of its body of your choosing withers:" + "\n   " + "Upper Limb. The target has disadvantage on Strength ability checks, and, if it has the Multiattack action, it has disadvantage on its first attack roll each round. " + "\n   " + "Lower Limb. The target’s speed is reduced by 10 feet, and it has disadvantage on Dexterity ability checks. " + "\n   " + "Body. Choose one damage type: bludgeoning, piercing, or slashing. The target loses its resistance to that damage type. If the target doesn’t have resistance to the chosen damage type, it is vulnerable to that damage type instead. The effect is permanent until removed by remove curse, greater restoration, or similar magic.",
};

SpellsList["mire"] = {
    name : "Mire",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 228],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "100 ft", 
    components : "V,S,M", 
    compMaterial : "a vial of sand mixed with water", 
    duration : "1 h", 
    save : "Str", 
    description : "10ft diameter quicksand, str save or sink up to waist and restrained",
    descriptionFull : "When you cast mire, you create a 10-foot-diameter pit of quicksand, sticky mud, or a similar dangerous natural hazard suited to the region. A creature that’s in the area when the spell is cast or that enters the affected area must make a successful Strength saving throw or sink up to its waist and be restrained by the mire. From that point on, the mire acts as quicksand, but the DC for Strength checks to escape from the quicksand is equal to your spell save DC. A creature outside the mire trying to pull another creature free receives a +5 bonus on its Strength check.",
};

SpellsList["mortal insight"] = {
    name : "Mortal Insight",
    classes : ["druid", "cleric", "ranger", "warlock"],   
    source : ["DM1", 229],
    level : 3,
    school : "Div", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    description : "Smell wounded crea within 30ft, adv on wis perc/surv checks to track wounded cre, adv on melee attks on wounded crea",
    descriptionFull : "A supernatural olfactory sense allows you to smell wounded living creatures. Until the spell ends, you can pinpoint a creature that doesn’t have all of its hit points within 30 feet of you, and you have advantage on Wisdom (Perception) and Wisdom (Survival) checks to track a creature that doesn’t have all of its hit points. In addition, you have advantage on melee attack rolls against any creature that doesn’t have all of its hit points. The spell has no effect on creatures that don’t have blood.",

};

SpellsList["natures aegis"] = {
    name : "Nature’s aegis",
    classes : ["druid", "ranger"],   
    source : ["DM1", 230],
    level : 1,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "an area of natural vegetation", 
    duration : "1 h", 
    save : "Wis", 
    description : "Vegetation on body, forms armor, temp AC of 14 + dex mod, adv on stealth checks in terrain used.",
    descriptionFull : "Grass, vines, branches, and other vegetation weave themselves over your body into a temporary suit of armor. You can use an action to dismiss this spell. Nature’s aegis gives you an Armor Class of 14 + your Dexterity modifier. The armor weighs 8 pounds and provides you with advantage on Dexterity (Stealth) checks made to hide in the terrain from which you used the vegetation.",
};
 
 SpellsList["necrotic leech"] = {
    name : "Necrotic leech",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 230],
    level : 5,
    school : "Necro", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Melee spell atk, 8d10 necro dmg, save or disadv on attk/saves/ability check rolls, redo save each turn",
    descriptionFull : "You channel destructive energy through your touch. Make a melee spell attack against a creature within your reach. The target takes 8d10 necrotic damage and must succeed on a Constitution saving throw or have disadvantage on attack rolls, saving throws, and ability checks for a number of rounds equal to the spell slot you expended. An affected creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. This spell has no effect on constructs or undead." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, the spell’s damage increases by 1d10 for each slot level above 5th.",
};
 
SpellsList["nightfall"] = {
    name : "Nightfall",
    classes : ["druid", "cleric", "warlock"],   
    source : ["DM1", 231],
    level : 3,
    school : "Evoc",
    time : "1 a", 
	range : "100 ft", 
    components : "V,S", 
    duration : "Conc, 10 min", 
	ritual : true, 
    description : "30 ft rad of night, normal darkness and heavily obscured",
    descriptionFull : "You call upon night to arrive ahead of schedule. With a sharp word, you create a 30-foot-radius cylinder of night centered on a point on the ground within range. The cylinder extends vertically for 100 feet or until it reaches an obstruction, such as a ceiling. The area inside the cylinder is normal darkness, and thus heavily obscured. Creatures inside the darkened cylinder can see illuminated areas outside the cylinder normally.",
};

SpellsList["Nip at the heels"] = {
    name : "Spell name",
    classes : ["druid", "ranger"],   
    source : ["DM1", 231],
    level : 2,
    school : "Illus", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a dog’s tooth", 
    duration : "1 min", 
    save : "Wis", 
    description : "Create illusionary wild dogs, bark and chase 1 crea, save or disadv on ability checks and attk rolls",
    descriptionFull : "You create an illusory pack of wild dogs that bark and nip at one creature you can see within range, which must make a Wisdom saving throw. On a failed save, the target has disadvantage on ability checks and attack rolls for the duration as it is distracted by the dogs. At the end of each of its turns, the target can make a Wisdom saving throw, ending the effect on itself on a successful save. A target that is at least 10 feet off the ground (in a tree, flying, and so forth) has advantage on the saving throw, staying just out of reach of the jumping and barking dogs." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};
 
SpellsList["obtuse"] = {
    name : "Obtuse",
    classes : ["druid", "bard", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 232],
    level : 0,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Wis", 
    description : "Cloud mind of 1 crea inhibiting decision-making skills, save or subtract 1d6 from next wisdom check",
    descriptionFull : "You temporarily cloud the mind of a creature within range, inhibiting its decision-making skills. If the target succeeds on a Wisdom saving throw, the spell is ineffective. On a failed save, the next time the creature makes a Wisdom check before the spell ends, roll a d6 and subtract the result from the roll. The spell then ends.",
};

SpellsList["poisoned volley"] = {
    name : "Poisoned Volley",
    classes : ["druid", "ranger", "wizard"],   
    source : ["DM1", 234],
    level : 2,
    school : "Conj",
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Draw imaginary bowstring, fire glowing arrows, 20ft square take 3d8 poison dmg, become poisoned. Con save to halve.",
    descriptionFull : "By drawing back and releasing an imaginary bowstring, you summon forth dozens of glowing green arrows. The arrows dissipate when they hit, but all creatures in a 20-foot square within range take 3d8 poison damage and become poisoned. A creature that makes a successful Constitution saving throw takes half as much damage and is not poisoned." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};

SpellsList["quench"] = {
    name : "Quench",
    classes : ["druid", "ranger"],   
    source : ["DM1", 237],
    level : 3,
    school : "Trans", 
    time : "1 a", 
    range : "120 ft", 
    components : "V,S,M", 
    compMaterial : "a cloth soaked in water", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Extinguish nonmagical fires in 30ft rad, magical fire req wis check 10+SL, fire elementals",
    descriptionFull : "You extinguish all nonmagical fires in a 30-foot‑radius area centered on the point at which you cast the spell. You can extinguish fire spells in the area as well. For each fire spell in the area, make a Wisdom check. The DC equals 10 + the spell’s level. On a successful check, the spell ends. Fire elementals in the area take 8d6 cold damage. A successful Constitution saving throw reduces the damage by half." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the radius of the area increases by 10 feet, and the damage against fire elementals increases by 1d6, for each slot level above 3rd.",
};

SpellsList["quick time"] = {
    name : "Quick Time",
    classes : ["druid"],   
    source : ["DM1", 237],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "any seed", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Age a plant or creature by 1 year, if int 3+, con save to resist aging.",
    descriptionFull : "You make one living creature or plant within range move rapidly in time compared to you. The target becomes one year older. For example, you could cast this spell on a seedling, which causes the plant to sprout from the soil, or you could cast this spell on a newly hatched duckling, causing it to become a full-grown duck. If the target is a creature with an Intelligence of 3 or higher, it must succeed on a Constitution saving throw to resist the aging. It can choose to fail the saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, you increase the target’s age by one additional year for each slot level above 4th.",
};

SpellsList["radiant beacon"] = {
    name : "Radiant Beacon",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 236],
    level : 5,
    school : "Evoc",
    time : "1 a", 
    range : "S:5-ft rad", 
    components : "V,S,M", 
    compMaterial : "a piece of amber", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Pillow of light, moves with me, crea in 5ft save or 4d8 rad dmg & blinded until start of my next turn",
    descriptionFull : "A pillar of brilliant light falls from the air, filling the square you are in and the area within 5 feet of you. Each other creature in the area must make a Constitution saving throw. On a failed save, a creature takes 4d8 radiant damage and is blinded until the start of your next turn. On a successful save, it takes half as much damage and isn’t blinded by this spell. Undead and oozes have disadvantage on this saving throw." + "\n   " + "For the duration, a pillar of brilliant radiance shines around you and moves with you. It sheds bright light in a 10-foot radius and dim light for an additional 20 feet. The light is sunlight. This spell’s light can be seen from a distance of up to 10 miles outdoors at night or 5 miles during twilight.",
};

SpellsList["reaver spirit"] = {
    name : "Reaver Spirit",
    classes : ["druid", "cleric", "ranger"],   
    source : ["DM1", 239],
    level : 3,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    description : "allies in range adv on str checks + saves, resist bludg, pierce, slash dmg, +2 bns to dmg, 1d4 exhaustion",
    descriptionFull : "You inspire allies to fight with the savagery of berserkers. You and any allies you can see within range have advantage on Strength checks and Strength saving throws; resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks; and a +2 bonus to damage with melee weapons. When the spell ends, each affected creature must succeed on a Constitution saving throw or gain 1d4 levels of exhaustion." + AtHigherLevels + "At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the bonus to damage increases by 1 for each slot level above 2nd.", 
};

SpellsList["revive beast"] = {
    name : "Spellname",
    classes : ["druid", "ranger"],   
    source : ["DM1", 240],
    level : 2,
    school : "Necro",
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "emeralds worth 100 gp, which the spell consumes", 
    duration : "Instantaneous", 
    save : "Wis", 
    description : "Revive a beast died within the last minute, returns to life with 1hp, cant restore old age or body parts",
    descriptionFull : "You touch a beast that has died within the last minute. That beast returns to life with 1 hit point. This spell can’t return to life a beast that has died of old age, nor can it restore any missing body parts.",
};

SpellsList["shocking shroud"] = {
    name : "Shocking Shroud",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 249],
    level : 4,
    school : "Evoc",
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "bit of fur and a bead of amber, crystal, or glass", 
    duration : "10 min", 
    description : "Electricity arcs over body, resistance to lightning crea in 5ft on melee attks take 2d8 lightning dmg",
    descriptionFull : "Arcs of electricity dance over your body for the duration, granting you resistance to lightning damage. You can end the spell early by using an action to dismiss it. In addition, whenever a creature within 5 feet of you hits you with a melee attack, arcs of electricity strike your attacker, who takes 2d8 lightning damage.",
};

SpellsList["starfall"] = {
    name : "Starfall",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 255],
    level : 5,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "5 crea save or 6d6 rad dmg, knocked prone, blinded. On fail half dmg, no prone/blind ",
    descriptionFull : "You cause bolts of shimmering starlight to fall from the heavens, striking up to five creatures that you can see within range. Each bolt strikes one target, dealing 6d6 radiant damage, knocking the target prone, and blinding it until the start of your next turn. A creature that makes a successful Dexterity saving throw takes half the damage, is not knocked prone, and is not blinded. If you name fewer than five targets, excess bolts strike the ground harmlessly." + AtHigherLevels + "When you cast this spell using a spell slot of 6th level or higher, you can create one additional bolt for each slot level above 5th.",
};

SpellsList["storm form"] = {
    name : "Storm Form",
    classes : ["druid"],   
    source : ["DM1", 256],
    level : 6,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a piece of wet wool", 
    duration : "Conc, 10 min", 
    save : "Con", 
    description : "Turn into a living storm cloud, gain flying speed, resistances, 3d8 lightning dmg on hit, see book",
    descriptionFull : "You transform into a living storm cloud, becoming a swirling mass of black clouds illuminated from within by flickers of lightning. While in this form, your only method of movement is a flying speed of 60 feet. You can enter and occupy the space of another creature. You have resistance to nonmagical damage, immunity to lightning damage, and advantage on Strength, Dexterity, and Constitution saving throws. If a creature strikes you with a melee weapon attack, it takes 3d8 lightning damage. You can pass through small holes, narrow openings, and even mere cracks, but you treat liquids as if they were solid surfaces. You can’t fall, and you remain hovering in the air even if stunned or otherwise incapacitated. You cannot talk or manipulate objects in storm cloud form, and any objects you were carrying or holding can’t be used, dropped, or interacted with in any way. You cannot cast spells while in this form. As an action, you can attack an opponent up to 30 feet away, dealing 3d8 lightning damage on a hit. You can also use an action to bring down rain upon a 5-foot square within your reach, drenching it and putting out any nonmagical fires in that area. Finally, you can use an action to expand your form to encompass a 20-foot-radius area, unleashing the storm’s full fury in a burst of rain, wind, lightning, and thunder. Each creature in the area is drenched with rain, takes 3d8 lightning and 3d8 thunder damage, is deafened for 1d4 rounds, and is knocked prone. A successful Constitution saving throw halves the damage and negates the deafened and prone conditions. Taking this action uses up any remaining duration of the spell, and you resume your normal form at the end of your turn.",
};

SpellsList["storm gods doom"] = {
    name : "Storm God's Doom",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 257],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Str", 
    description : "20 ft rad air vortex, on failed save crea take 3d8 bludg dmg, thrown into the air, takes falling dmg",
    descriptionFull : "A powerful wind swirls from your outstretched hand toward a point you choose within range, where it explodes with a low roar into vortex of air. Each creature in a 20-foot-radius cylinder centered on that point must make a Strength saving throw. On a failed save, the creature takes 3d8 bludgeoning damage, is pulled to the center of the cylinder, and is thrown 50 feet upward into the air. If a creature hits a solid obstruction when it’s thrown upward (such as a stone ceiling), it takes bludgeoning damage as if it had fallen 50 feet, minus the distance it traveled upward. For example, if a creature hits the ceiling after rising only 10 feet, it takes bludgeoning damage as if it had fallen 40 feet, or 4d6 bludgeoning damage." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, increase the distance affected creatures are thrown into the air by 10 feet for each slot level above 3rd.",
};

SpellsList["sudden dawn"] = {
    name : "Sudden Dawn",
    classes : ["druid", "cleric", "warlock", "wizard"],   
    source : ["DM1", 257],
    level : 3,
    school : "Evoc",
    time : "1 a", 
    range : "100 ft", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    description : "Call dawn to arrive, 30ft rad 100ft high cylinder of light on point within range, brightly lit",
    descriptionFull : "You call upon morning to arrive ahead of schedule. With a sharp word, you create a 30-foot-radius cylinder of light centered on a point on the ground within range. The cylinder extends vertically for 100 feet or until it reaches an obstruction, such as a ceiling. The area inside the cylinder is brightly lit.",
	ritual : true, 
};

SpellsList["sudden stampede"] = {
    name : "Sudden Stampede",
    classes : ["druid", "bard", "ranger"],   
    source : ["DM1", 257],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S,M", 
    compMaterial : "a horseshoe", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Conjure fey spirit horses, in a 10x60ft area, each crea in area takes 6d10 bludg dmg & knocked prone",
    descriptionFull : "You conjure up a multitude of fey spirits that manifest as galloping horses. These horses run in a 10-foot-wide, 60-foot-long line, in a given direction starting from a point within range, trampling all creatures in their path, before vanishing again. Each creature in the line takes 6d10 bludgeoning damage and is knocked prone. A successful Dexterity saving throw reduces the damage by half, and the creature is not knocked prone.",
};

SpellsList["thunderous wave"] = {
    name : "Thunderous wave",
    classes : ["druid", "sorcerer"],   
    source : ["DM1", 262],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "90 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Str", 
    description : "Shock wave at point, 30ft sphere, crea pushed 30ft, knocked prone, strikes obstruction 5d6 bludg dmg see b",
    descriptionFull : "You initiate a shock wave centered at a point you designate within range. The wave explodes outward into a 30-foot‑radius sphere. This force deals no damage directly, but every creature the wave passes through must make a Strength saving throw. On a failed save, a creature is pushed 30 feet and knocked prone; if it strikes a solid obstruction, it also takes 5d6 bludgeoning damage. On a successful save, a creature is pushed 15 feet and not knocked prone, and it takes 2d6 bludgeoning damage if it strikes an obstruction. The spell also emits a thunderous boom that can be heard within 400 feet.",

};


SpellsList["thorn cage"] = {
    name : "Thorn Cage",
    classes : ["druid", "warlock"],   
    source : ["DM1", 261],
    level : 1,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "1 crea save or restrained by thorny vines, 2d6 piercing dmg when they try to break free",
    descriptionFull : "Thick vines studded with sharp thorns spring from the ground around a target of your choice. The target must succeed on a Strength saving throw or be restrained by the thorny vines until the spell ends. A creature restrained by the vines can use its action to make a Strength check against your spell save DC. Doing so causes the creature to take 2d6 piercing damage from the thorns. On a successful check, it frees itself.",
};

SpellsList["tree running"] = {
    name : "Spellname",
    classes : ["druid", "ranger"],   
    source : ["DM1", 267],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "S,M", 
    compMaterial : "a maple catkin", 
    duration : "Conc, 1 h", 
    description : "1 crea gain climb speed = walk speed while on plants, hold on one-handed, walk on tiny branches.",
    descriptionFull : "One willing creature you touch gains a climbing speed equal to its walking speed. This climbing speed functions only while the creature is in contact with a living plant or fungus that’s growing from the ground. The creature can cling to an appropriate surface with just one hand or with just its feet, leaving its hands free to wield weapons or cast spells. The plant doesn’t give under the creature’s weight, so the creature can walk on the tiniest of tree branches, stand on a leaf, or run across the waving top of a field of wheat without bending a stalk or touching the ground.",
};


SpellsList["trick question"] = {
    name : "Spellname",
    classes : ["druid", "bard", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 268],
    level : 1,
    school : "Ench", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Wis", 
    description : "Ask a question with a one word answer, crea save or compelled to answer honestly.",
    descriptionFull : "You pose a question that can be answered by one word, directed at a creature that can hear you. The target must make a successful Wisdom saving throw or be compelled to answer your question truthfully. When the answer is given, the target knows that you used magic to compel it.",
};

SpellsList["volley shield"] = {
    name : "Volley shield",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 273],
    level : 7,
    school : "Abjur", 
    time : "1 a", 
    range : "Touch", 
    components : "S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "1 crea gains energy shield, +5 AC, resistance to nonmagic bludg/pierc/slash dmg, reflect hostile spells",
    descriptionFull : "You touch a willing creature and create a shimmering shield of energy to protect it. The shield grants the target a +5 bonus to AC and gives it resistance against nonmagical bludgeoning, piercing, and slashing damage for the duration of the spell." + "\n   " + "In addition, the shield can reflect hostile spells back at their casters. When the target makes a successful saving throw against a hostile spell, the caster of the spell immediately becomes the spell’s new target. The caster is entitled to the appropriate saving throw against the returned spell, if any, and is affected by the spell as if it came from a spellcaster of the caster’s level.",
};

SpellsList["weilers ward"] = {
    name : "Weiler's Ward",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 276],
    level : 2,
    school : "Conj", 
    time : "1 bns", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a lock of hair from a fey creature", 
    duration : "Conc, 1 h", 
    save : "Cha", 
    description : "4 floating orbs, dim light 15ft, enemy enters/starts turn, use rea to attk 1d6 force dmg pushed 20ft",
    descriptionFull : "You create four small orbs of faerie magic that float around your head and give off dim light out to a radius of 15 feet. Whenever a Large or smaller enemy enters that area of dim light, or starts its turn in the area, you can use your reaction to attack it with one or more of the orbs. The enemy creature makes a Charisma saving throw. On a failed save, the creature is pushed 20 feet directly away from you, and each orb you used in the attack explodes violently, dealing 1d6 force damage to the creature." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the number of orbs increases by one for each slot level above 2nd.", 
};

SpellsList["winters radiance"] = {
    name : "Winter’s radiance",
    classes : ["druid", "cleric", "sorcerer", "wizard"],   
    source : ["DM1", 277],
    level : 6,
    school : "Evoc", 
    time : "1 a", 
    range : "400 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of polished glass", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Sunlight reflects off fresh snow, temp drops, save or 4d8 cold dmg, blinded.",
    descriptionFull : "When you cast this spell, the piercing rays of a day’s worth of sunlight reflecting off fresh snow blankets the area, and the temperature drops precipitously. A creature in the area must make a Constitution saving throw, taking 4d8 cold damage and being blinded for the duration on a failed save or half as much damage with no additional effect on a successful one. Creatures possessing Sunlight Sensitivity have disadvantage on their save." + "\n   " + "If any of this spell’s area overlaps with an area of darkness created by a spell of 6th level or lower, the spell that created the darkness is dispelled.",
};

SpellsList["wresting wind"] = {
    name : "Wresting Wind",
    classes : ["druid", "ranger", "sorcerer"],   
    source : ["DM1", 279],
    level : 2,
    school : "Evoc", 
    time : "1 a", 
    range : "90 ft", 
    components : "V,S,M", 
    compMaterial : "a handful of paper confetti", 
    duration : "Instantaneous", 
    save : "Str", 
    description : "Burst of air rips weapons and items from hands of enemies in 20ft rad, items land 10ft away",
    descriptionFull : "By blowing a pinch of confetti from your cupped hand, you create a burst of air that can rip weapons and other items out of the hands of your enemies. Each enemy in a 20-foot radius centered on a point you target within range must make a successful Strength saving throw or drop anything held in its hands. The objects land 10 feet away from the creatures that dropped them, in random directions.", 
};
/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file.
	You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.

	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded sheet or to first reset sheet.
	Thus you don't run the risk of things that have already been filled out causing conflicts.

	-HOW TO READ-
	Every line comes with a comment immediately after it to show whether it is // Optional // or // Required //,
	followed by a more explanatory comment

	-THIS IS JAVASCRIPT-
	The imports scripts work by creating a new entry inside an existing object or by calling functions.
	You can create new or overwrite existing global variables by omitting 'var'.
	You will need to understand the basics of JavaScript variables: strings, arrays, and JSON objects.
	Note that every opening symbol must have its closing counterpart: (), {}, [], "", ''.
	If these are not present, the code will give an error when imported.
	Use proper editing software for code (like Notepad++). Text processors like Microsoft Word will screw up your code.
	To help finding syntax errors, use (online) code checking software like https://jshint.com

	-COMMENTS IN THE EXAMPLE-
	Anything on a line after two forward slashes is a comment and will be ignored when running the code.
	Multiline comments are possible. Open them using the forward slash followed by an asterisk and close them with the opposite.
	The below contains a lot of these comments. The comments are not necessary for the script to work, so feel free to remove them.
*/

/*	-INFORMATION-

	Subject:	Source

	Effect:		This is the syntax for adding a new source to the sheet.

	Remarks:	The object name of a source is used for almost everything that you can import into the sheet.
				A tip is to invoke a new source object at the start of an import script to make sure it is available for whatever you are adding.

	Sheet:		v13.1.0 and newer
*/

var iFileName = "Deep Magic Vol 2 Source.js";
/* 	iFileName // OPTIONAL //
	TYPE:	string
	USE:	how the file will be named in the sheet if you import it as a file

	Note that this is a variable called 'iFileName'.
	Variables invoked inside an import script will not be available after importing.
	However, if you invoke the variable without the 'var', it will be available after importing.

	This doesn't have to be the same as the actual name of the file.
	This doesn't need to have the .js file extension.
	Only the first occurrence of this variable will be used.
*/

RequiredSheetVersion("13.0.6");
/*	RequiredSheetVersion // OPTIONAL //
	TYPE:	function call with one variable, a string or number
	USE:	the minimum version of the sheet required for the import script to work

	If this script is imported into a sheet with an earlier version than given here, the player will be given a warning.

	The variable you input can be a the full semantic version of the sheet as a string (e.g. "13.0.6" or "13.1.0-beta1+201209").
	Alternatively, you can input a number, which the sheet will translate to a semantic version.
	For example:
		FUNCTION CALL						REQUIRED MINIMUM VERSION
		`RequiredSheetVersion(13);`			13.0.0
		`RequiredSheetVersion(13.1);`		13.1.0

	You can find the full semantic version of the sheet at the bottom of every page,
	or look at the "Get Latest Version" bookmark, which lists the version number,
	or go to File >> Properties >> Description, where the version is part of the document title.
*/

SourceList["DM2"] = {
/* 	SourceList object name // REQUIRED //
	TYPE:	string
	USE:	object name of the source as it will be used by the sheet

	By adding a new object to the existing SourceList object, we create a new source.
	The object name here is 'BoP'. You can use any object name as long as it is not already in use.
	If you do use an object name that is already in use, you will be overwriting that object.

	The object name doesn't have to be the same as the abbreviation used for the source (see below), but it does make it easier.

	Do not use a single-letter object name, those are reserved for official WotC publications.
	Doing so will make it likely that you overwrite an existing source.

	Note that "HB" is already used by the "Homebrew" source.
	Note that this doesn't have to be only lower case!
	Also note the absence of the word "var" and the use of brackets [].
*/
	name : "Deep Magic Volume 2",
/*	name // REQUIRED //
	TYPE:	string
	USE:	name of the source as it will be used by the sheet

	This is the full name of the source.
	The full name will only be used in tooltips and dialogs, so make it as long as you want.
*/
	abbreviation : "DM2",
/*	abbreviation // REQUIRED //
	TYPE:	string
	USE:	abbreviation of the source as it will be used by the sheet

	The abbreviation doesn't have to be the same as the object name used for the source (see above), but it does make it easier.

	This is a greatly shortened name of the source.
	The abbreviation will be used extensively throughout the sheets, so be sure to make it easily recognizable.
*/
	abbreviationSpellsheet : "D",
/*	abbreviationSpellsheet // OPTIONAL //
	TYPE:	string
	USE:	abbreviation of the source as it will be used on the spell sheet pages in the "B" column
	ADDED:	v13.0.1

	The spell sheet pages have very limited space for the abbreviations so this is a separate attribute.
	It is recommended to keep this abbreviation to just a single character.

	Two characters might fit, depending on the character. For example, the "M" and "W" are wider
	in most fonts than other letter.
	If you are using more than one character, be sure to try the abbreviation on the sheet,
	or else the text might overflow the field, resulting in a [+] sign that will obscure the whole field.

	If this attribute is not present, the sheet will default to the first letter of the object name
	(not the `abbreviation` attribute).
	For example, for the above `SourceList["BoP"]`, the sheet will put a "B" on the spell sheet page.
*/



	url : "https://koboldpress.com/kpstore/product/deep-magic-volume-1-2-2023/",
/*	url // OPTIONAL //
	TYPE:	string
	USE:	link to the source online

	This URL is only used in the Source Materials dialog.

	Please use https if available.
*/

}
var iFileName = "Deep Magic Vol 2 Spells.js";

RequiredSheetVersion("13.0.6");


//Template Here
/* SpellsList["spellname"] = {
    name : "Spellname",
    classes : ["druid"],   
    source : ["DM2", 1],
    level : 1,
    school : "", //"Abjur" "Conj" "Div" "Ench" "Illus" "Necro" "Trans" "Evoc"
    time : "1 a", 
	timeFull : "1 reaction, which you take when ", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "Incense or a black candle", 
    duration : "Conc, 1 min", 
    save : "Wis", 
	ritual : true, //optional
    description : "1 crea save or ",
    descriptionFull : "Long description here." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher...",
	descriptionCantripDie : "1 creature save or `CD`d12 Poison dmg",
};
 */

//45 spells 20/06/2024

SpellsList["bark bulwark"] = {
    name : "Bark Bulwark",
    classes : ["druid"],   
    source : ["DM2", 141],
    level : 4,
    school : "Abjur", 
    time : "1 a", 
    range : "5 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of bark", 
    duration : "Conc, 10 min", 
    description : "Create wall of bark, 5ft high 30ft long, 3/4 cover, permanent if conc maintained",
    descriptionFull : "A nonmagical wall of bark erupts from the ground to protect you and your allies. Choose a space in front of or behind you. The wall forms in that space, extending 15 feet out from that space along the ground in opposite directions for a total length of 30 feet. The wall is 5 feet high, 6 inches thick, opaque, and provides three-quarters cover to creatures behind it. " + "\n   " + "If the wall cuts through a creature’s space when it appears, the creature is pushed to one side of the wall (your choice). The wall can’t otherwise occupy the same space as a creature or object. The wall must be vertical and must rest on a firm foundation, such as the ground, the floor of a building, the deck of a ship, or similar." + "\n   " + "The wall is an object made of bark that can be damaged and thus breached. Each 10-foot section of the wall has AC 15, 100 hit points, and vulnerability to fire damage. Reducing a section to 0 hit points destroys it. "  + "\n   " + "If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can’t be dispelled. Otherwise, the wall disappears when the spell ends.",
};


SpellsList["bartholomews elemental arc"] = {
    name : "Bartholomew’s elemental arc",
	nameShort : "Bart's elemental arc",
    classes : ["druid"],   
    source : ["DM2", 141],
    level : 3,
    school : "Abjur", 
    time : "1 rea", 
	timeFull : "1 reaction, which you take when a friendly creature within 10 feet of you would take acid, cold, fire, lightning, or thunder damage", 
    range : "10 ft", 
    components : "S,M", 
    compMaterial : "a 6-inch rod of copper", 
    duration : "1 rd", 
    description : "call elemental energy towards you, make rgd spell attk to determine who takes dmg, see book",
    descriptionFull : "You become a living conduit of elemental energy. The friendly target doesn’t take the triggering damage, as you draw the elemental energy into yourself and toward a hostile creature you can see within 30 feet of you. Make a ranged spell attack. On a hit, the target takes half the triggering damage, and you take the other half. On a miss, you take half the triggering damage. On a critical hit, the target takes all the triggering damage, and you take none. After the attack, regardless if it hits or misses, you gain resistance to the triggering damage type until the start of your next turn.",
};

SpellsList["beast essence"] = {
    name : "Beast essence",
    classes : ["druid", "ranger"],   
    source : ["DM1", 142],
    level : 3,
    school : "Trans",
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a feather or bit of animal fur", 
    duration : "1 h", 
    description : "PLACEHOLDER",
    descriptionFull : "You transform your body to take on aspects of one of the following creatures for the duration." + "\n   " + "Bear. Your body becomes bulkier, and your fingers are tipped with thick, yellow claws. You can use your spellcasting ability modifier instead of your Strength modifier when making a grapple attack and when escaping a grapple. In addition, you gain temporary hit points equal to twice your spellcasting ability modifier when you cast this spell and every 10 minutes until the spell ends. " + "\n   " + "Boar. Two yellowed tusks grow from your bottom jaw, and short, coarse hair covers your face, neck, torso, and arms. You have advantage on Wisdom (Perception) checks that rely on smell. In addition, once on each of your turns, if you move at least 10 feet before making a melee attack, the attack deals extra damage of the attack’s type equal to your spellcasting ability modifier, and the target must succeed on a Strength saving throw or be pushed up to 5 feet away from you. " + "\n   " + "Hare. Your skin becomes covered in a layer of soft fur, and your legs become more muscular. Your speed increases by 10 feet, and you can take the Dash action as a bonus action on each of your turns. In addition, you can use your spellcasting ability score instead of your Strength score to determine the height and distance you can jump. " + "\n   " + "Raven. Feathers erupt along your arms, cheekbones, and legs. You gain a flying speed equal to your walking speed, and you have advantage on Wisdom (Perception) checks that rely on sight. In addition, you can mimic any sound you have heard. A creature that hears the sounds can tell they are imitations with a successful Wisdom (Insight) check against your spell save DC. When the spell ends, you fall if you are still aloft. " + "\n   " + "Snake. Your body becomes slimmer, your skin becomes cool to the touch, and your neck elongates slightly. Once on each of your turns, when you hit a creature with an attack, that creature must succeed on a Constitution saving throw or take poison damage equal to your spellcasting ability modifier and become poisoned until the end of its next turn.",
};
 

SpellsList["bitter wind"] = {
    name : "Bitter Wind",
    classes : ["druid"],   
    source : ["DM2", 143],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "Self:120-ft", 
    components : "V,S,M", 
    compMaterial : "a birch wood fan", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "120ft/20ft wind in chosen direction, crea pushed 30ft, 1d12 cold dmg & prone, disadv in cold/dark",
    descriptionFull : "Freezing wind, forming a line 120 feet long and 20 feet wide, blasts from you in a direction you choose for the spell’s duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 30 feet away from you in a direction following the line. Creatures that fail the saving throw also take 1d12 cold damage and are knocked prone. If cast during cold weather or in dark or shadowy conditions, the saving throw is made with disadvantage. Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you. " + "\n   " + "As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you. " + "\n   " + "The bitter wind disperses gas or vapor, and it extinguishes candles, torches, lanterns, and similar flames in the area." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the saving throw is made with disadvantage, and the damage increases by 1d12 for each slot level above 3rd.",
};

SpellsList["breeze walker"] = {
    name : "Breeze Walker",
    classes : ["druid"],   
    source : ["DM2", 146],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a pheasant feather", 
    duration : "Conc, 1 h", 
    description : "Summon strong breeze in chosen direction, levitate 3ft, travel 150% speed in chosen direction",
    descriptionFull : "Choosing a direction, you summon a strong, steady breeze to swirl beneath your feet and propel you. You levitate to a sustained height of 3 feet for the duration, and travel in the chosen direction at 150% of your movement. Travel in any other direction is at 50% of your movement. While mounted, your mount’s movement is affected as well.",
};

SpellsList["brilliant harrier"] = {
    name : "Brilliant Harrier",
    classes : ["druid"],   
    source : ["DM2", 147],
    level : 2,
    school : "Conj", 
    time : "1 bns", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a piece of charcoal", 
    duration : "1 min", 
    description : "Create flame bird, bright light, distracts enemies in 30ft, disadv on rolls, 1d4 dmg on fail, see b",
    descriptionFull : "You create a glowing bird of flame on a point you can see within range. The harrier bird hovers in place, shedding bright light in a 10-foot radius and dim light for an additional 10 feet, and it lasts for the duration or until you cast this spell again. Until this spell ends, when a creature you can see within 30 feet of the harrier makes an attack roll, ability check, or saving throw, you can use your reaction to give that target disadvantage on that roll, as the glowing harrier swoops down to distract the target. If the roll fails, the target takes 1d4 fire damage. The harrier has an AC equal to your spell save DC. Each time it is hit, roll a d20. On a result of 9 or less, it vanishes.",
};

SpellsList["burst of pollen"] = {
    name : "Burst of Pollen",
    classes : ["druid"],   
    source : ["DM2", 148],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "Self:15-ft", 
    components : "V,S,M", 
    compMaterial : "a petal from a white lily", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Deadly poison bursts, crea save or 6d8 necrotic dmg, half on failed save",
    descriptionFull : "A cloud of deadly pollen bursts out from you in a 15-foot radius. Each creature in the cloud when it appears must make a Constitution saving throw, taking 6d8 necrotic damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["by the light of the moon"] = {
    name : "By the Light of the Moon",
    classes : ["druid"],   
    source : ["DM2", 149],
    level : 2,
    school : "Div", 
    time : "1 a", 
    range : "Self:30-ft", 
    components : "V,S",  
    duration : "Conc, 1 min", 
    description : "Area bathed in moonlight, highlights hidden obj, locations and clues, percep/invest checks get adv",
    descriptionFull : "The area within 30 feet of you becomes bathed in magical moonlight. In addition to providing dim light, it highlights objects and locations that are hidden or that hold a useful clue. Until the spell ends, all Wisdom (Perception) and Intelligence (Investigation) checks made in the area are made with advantage.", 
	};

SpellsList["by the light of the watchful moon"] = {
    name : "By the Light of the Watchful Moon",
	nameShort : "By TLOT watchful moon",
    classes : ["druid"],   
    source : ["DM2", 149],
    level : 4,
    school : "Div",
    time : "1 a", 
    range : "90 ft", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Cha", 
    description : "Illuminate all threats/enemies/traps/hazards with shafts of moonlight, show area of hidden crea",
    descriptionFull : "Regardless of the time of day or your location, you command the watchful gaze of the moon to illuminate threats to you and your allies. Shafts of bright moonlight, each 5 feet wide, shine down from the sky (or from the ceiling if you are indoors), illuminating all spaces within range that contain threats, whether they are enemies, traps, or hidden hazards. An enemy creature that makes a successful Charisma saving throw resists the effect and is not picked out by the moon’s glow. " + "\n   " + "The glow does not make invisible creatures visible, but it does indicate an invisible creature’s general location (somewhere within the 5-foot beam). The light continues to illuminate any target that moves, but a target that moves out of the spell’s area is no longer illuminated. A threat that enters the area after the spell is cast is not subject to the spell’s effect.",
};

SpellsList["chaotic flowerfall"] = {
    name : "Chaotic Flowerfall",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 151],
    level : 9,
    school : "Conj",
    time : "1 a", 
    range : "150 ft", 
    components : "V,S,M", 
    compMaterial : "a posy of flowers", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Shower of flowers 10 10ft cubes, +10d6 hp or cured of diseases and conditions, enemies 10d10 necro dmg, see b",
    descriptionFull : "A shower of flowers falls across the ground at ten different points you can see within range. The flowers fall in 10-foot cubes centered on each point, and each cube must be contiguous with at least one other cube. Each friendly creature in a cube chooses one of the following when the flowers appear—it regains 10d6 hit points or it is cured of all diseases and all the following conditions: blinded, charmed, deafened, paralyzed, petrified, and poisoned. Each hostile creature in a cube must make a Dexterity saving throw, taking 10d10 necrotic damage on a failed save, or half as much damage on a successful one. A creature in the area of more than one cube of falling flowers is affected only once.",
};
 
SpellsList["chamber of restoring amber"] = {
    name : "Chamber of Restoring Amber",
	nameShort : "Chamb. restoring amber",
    classes : ["druid"],   
    source : ["DM2", 151],
    level : 4,
    school : "Abjur", 
    time : "1 a", 
    range : "Self:15-ft", 
    components : "V,S,M", 
    compMaterial : "a piece of amber worth at least 50 gp", 
    duration : "10 min",  
    description : "Summon dome of amber, fit 12 med crea, other crea barred from entry, can't cast within dome",
    descriptionFull : "A 15-foot-radius immobile dome of amber springs into existence around and above you and remains stationary for the duration. The spell ends if you leave the area. " + "\n   " + "The amber can fit up to twelve Medium or smaller creatures inside of it. The spell fails if its area includes a larger creature or more than twelve creatures. Only creatures you designate can enter the dome through an entrance in one of the dome’s walls. All other creatures are barred from entering the amber dome. Spells and other magical effects can’t extend through the amber or be cast through it. The atmosphere inside the amber is comfortable and dry, regardless of the weather outside. The interior is dimly lit in a soft, amber glow. The amber is opaque from the outside, but it is transparent from the inside. " + "\n   " + "A creature that remains in the amber for its full duration gains the benefits of a short rest, and it can’t be affected by this spell again until it finishes a long rest.",
};

SpellsList["chrysalis"] = {
    name : "Chrysalis",
    classes : ["druid"],   
    source : ["DM2", 153],
    level : 5,
    school : "Trans", 
    time : "rea", 
	timeFull : "1 reaction, which you take when a friendly creature you can see within 60 feet of you is reduced to 0 HP", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a caterpillar cocoon", 
    duration : "1 rd", 
    description : "A protective cocoon surrounds 1 crea,  5d8 + 3 x spell ability mod protection/healing, see b",
    descriptionFull : "A protective chrysalis surrounds a creature you can see within range as it is reduced to 0 hit points. While protected in this way, the target is still unconscious from being reduced to 0 hit points, but unlike when a creature is normally unconscious, attacks from attackers within 5 feet aren’t automatically critical hits. In addition, the target has three-quarters cover and isn’t prone while protected. The target must make applicable death saving throws, as normal." + "\n   " + "The chrysalis has hit points equal to 5d8 + three times your spellcasting ability modifier. When the protected target would take damage, the chrysalis takes the damage instead. The chrysalis is destroyed when it has 0 hit points. If the chrysalis remains at the end of your next turn, the target regains hit points equal to the chrysalis’s remaining hit points, then the chrysalis crumbles to dust and is destroyed. As the chrysalis crumbles, spectral wings manifest on the target’s back, and the target gains a flying speed of 30 feet for 1 minute.", 
	};

SpellsList["clearing the field"] = {
    name : "Clearing the Field",
    classes : ["druid"],   
    source : ["DM2", 153],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "40 ft", 
    components : "V,S", 
    duration : "1 h", 
    description : "All trees and plants 40ft rad into ground, diff terrain becomes clear ground, plants rise on spell end",
    descriptionFull : "With a harsh word and a vicious chopping motion, you cause every tree, shrub, and stump within 40 feet of you to sink into the ground, leaving the vacated area clear of plant life that might otherwise hamper movement or obscure sight. Overgrown areas that counted as difficult terrain become clear ground and no longer hamper movement. The original plant life instantly rises from the ground again when the spell ends or is dispelled. Plant creatures are not affected by clearing the field." + "\n   " + "Ritual Focus. If you expend your ritual focus, each Plant creature in the area must succeed on a Constitution saving throw or decrease in size as if it failed the saving throw against the reduce effect of the enlarge/reduce spell.", 
	};

SpellsList["conductive vapors"] = {
    name : "Conductive Vapors",
    classes : ["druid"],   
    source : ["DM2", 155],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "1 min", 
    save : "Con", 
    description : "Summon 20ft rad mist, obscures, lightng dmg spreads to other crea then disperses mist, save halves",
    descriptionFull : "You create a 20-foot-radius sphere of mist centered on a point within range. The sphere spreads around corners, and its area is heavily obscured. It lasts for the duration or until a wind of moderate or greater speed (at least 10 miles per hour) disperses it." + "\n   " + "If a creature within the mist takes lightning damage, the mist immediately disperses, ending this spell, and the lightning damage spreads to other creatures in the mist. Each creature within the mist, other than the creature that took the lightning damage, must make a Constitution saving throw, taking the same amount of lightning damage that the triggering creature took on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the mist’s radius increases by 5 feet for each slot level above 2nd.",
};

SpellsList["court the flame"] = {
    name : "Court the Flame",
    classes : ["druid"],   
    source : ["DM2", 158],
    level : 2,
    school : "Abjur", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Nearby nonmagical fire protects you, +2 to AC, expend fire to absorb fire dmg",
    descriptionFull : "You court the power of a nearby fire to shield you. Choose one source of nonmagical fire that is the size of a torch or larger within 5 feet of you. You gain a +2 bonus to your AC for the duration. Until this spell ends, if you would take fire damage from any source, you can use your reaction to reduce that damage to 0. If you do, the spell ends. If you spend at least 1 minute more than 5 feet away from the source of fire you chose when you cast this spell, the spell immediately ends.",
};

SpellsList["desolation"] = {
    name : "Desolation",
    classes : ["druid", "cleric", "wizard"],   
    source : ["DM1", 163],
    level : 8,
    school : "Necro", 
    time : "1 h", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "an obsidian acorn worth at least 500 gp, which is consumed in the casting", 
    duration : "1 year", 
    save : "Wis", 
    description : "Curse the land, area in 1 mile becomes infertile, see book",
    descriptionFull : "You plant an obsidian acorn in solid ground and spend an hour chanting a litany of curses to the natural world, after which the land within 1 mile of the acorn becomes infertile, regardless of its previous state. Nothing will grow there, and all plant life in the area dies over the course of a day. Plant creatures are not affected. Spells that summon plants, such as entangle, require an ability check using the caster’s spellcasting ability against your spell save DC. On a successful check, the spell functions normally; if the check fails, the spell is countered by desolation. " + "\n   " + "After one year, the land slowly reverts to its normal fertility, rejoining the march of nature. " + "\n   " + "A living creature that finishes a short rest within the area of a desolation spell halves the result of any Hit Dice it expends. Desolation counters the effects of a bloom spell. Ritual Focus. " + "\n   " + "If you expend your ritual focus, the duration becomes permanent.",
};
 

SpellsList["diversion door"] = {
    name : "Diversion Door",
    classes : ["druid"],   
    source : ["DM2", 165],
    level : 3,
    school : "Abjur", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a bundle of aromatic herbs or incense either of which must be worth at least 100 gp",  
    duration : "24 h", 
    save : "Cha", 
    description : "ward an entryway, on failed save crea are turned away from area and forgets intent.",
    descriptionFull : "Your touch wards an arch, doorway, entryway, or other threshold against intruders. For the duration of the spell, each time a creature attempts to cross the warded threshold, the creature must make a Charisma saving throw. On a failed save, the creature is redirected away from the threshold as if it had passed through the threshold from the other side, and it forgets its primary, intended course of action in relation to the threshold, such as obtaining an object or chasing a creature on the other side of the threshold, for 1 minute. On a successful save, the creature is redirected away from the threshold, but it doesn’t forget its primary, intended course of action. " + "\n   " + "When you cast this spell, you can designate a password or other trigger that allows a creature to pass through the threshold unimpeded, such as walking through the threshold backward or whistling a specific tune while stepping through the threshold. You can create a permanently warded threshold by casting this spell on that threshold every day for a year and a day.",
};

SpellsList["doom of the black river"] = {
    name : "Doom of the Black River",
    classes : ["druid"],   
    source : ["DM2", 170],
    level : 4,
    school : "Trans", 
    time : "1 a", 
    range : "Self:10f rad", 
    components : "V,S,M", 
    compMaterial : "Marsh water", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "devour all wood and leather in the area, held items need dex save, magical items unaffected.",
    descriptionFull : "You speak a word of unmaking that devours all wood and leather in the area, destroying leather armor, shield straps, spear shafts, arrows, bows, staves, clubs, and so forth, including your own items. Objects made of other materials, such as linen, wool, glass, and metals, are unaffected. Items that are worn or held gain a collective Dexterity saving throw by the wearer. On a successful save, none of that wearer’s items are affected. Magical items are never affected by this spell.",
};

SpellsList["doom of the cracked shield"] = {
    name : "Doom of the cracked shield",
	nameShort : "Doom of Cracked Shield",
    classes : ["druid"],   
    source : ["DM2", 170],
    level : 1,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S",  
    duration : "Instantaneous", 
    description : "Next time weapon used, break nonmagic shield or -2 penalty to nonmagic armor AC",
    descriptionFull : "Doom of the cracked shield is cast on a melee weapon. The next time that weapon is used, it destroys the target’s nonmagical shield or damages nonmagical armor, in addition to the normal effect of the attack. If the foe is using a nonmagical shield, it breaks into pieces. If the foe doesn’t use a shield, its nonmagical armor takes a −2 penalty to AC. If the target doesn’t use armor or a shield, the spell is expended with no effect.",
};

SpellsList["dream canopy"] = {
    name : "Dream canopy",
    classes : ["druid"],   
    source : ["DM2", 172],
    level : 3,
    school : "Illus", 
    time : "1 a", 
    range : "Self:10ft rad", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "All", 
    description : "Plant dreams affect nearby crea, various effects, save or be affected, see b",
    descriptionFull : "You summon a verdant and shifting canopy that depicts the dreams of nearby plants. The canopy extends out from you to a distance of 5 feet for the duration, surrounding you in the images and minor sounds of these dreams. When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. At the start of each of your turns, choose one of the following effects. The effect remains until the start of your next turn when you can choose another effect or to maintain that same effect. " + "\n   " + "Mesmerleaf. A creature that enters the area for the first time on a turn or starts its turn there must succeed on a Charisma saving throw or have disadvantage on attack rolls until the start of your next turn, as the plants dream of the mesmerizing dance of leaves caught in autumnal wind. " + "\n   " + "Scintillating Bough. A creature that enters the area for the first time on a turn or starts its turn there must succeed on a Dexterity saving throw or be blinded until the start of your next turn, as the plants dream of speckled sunlight peeking through leaves. " + "\n   " + "Sprigs and Twigs. A creature that enters the area for the first time on a turn or starts its turn there must succeed on a Wisdom saving throw or take 3d8 force damage, as the plants dream of twigs, thorns, and bare tree limbs poking out from all angles.",
};

SpellsList["dreamstride"] = {
    name : "Dreamstride",
    classes : ["druid"],   
    source : ["DM2", 171],
    level : 3,
    school : "Illus", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Conc, 10 min", 
    save : "Wis", 
    description : "Step into dream of crea known to you, can influence the dream, see b",
    descriptionFull : "You reach out with your consciousness and step into the dreams of a creature you can see or a creature that is known to you. The creature must be on the same plane of existence as you and have a minimum Intelligence score of 7. If the target is not asleep or in meditation (in the case of elves or similar races) when the spell is cast, the spell fails. This spell has no effect on constructs or undead." + "\n   " + "When you cast the spell, you enter your target’s dream, and you view the events as an invisible third party. The creature is unaware of your presence, and you cannot interact with the dream in any way other than the method listed below." + "\n   " + "As an action, you can reach out your consciousness and attempt to influence the course of the dream. For example, you may cause something new to appear or cause the tone of the dream to change to a nightmare (or vice-versa) or influence a “character” in the dream other than the target to act a certain way. When you attempt to influence the dream, your target must succeed on a Wisdom saving throw against your spell save DC. On a failed save, your attempt to alter the dream is successful. On a successful save, you are immediately ejected from the dream as the dreamer awakens." + "\n   " + "For the duration of the spell, your body lies in repose in the location you cast the spell. You are blind and deaf to your body’s surroundings, though you can feel and are aware if you take damage. If your body is moved, the spell ends. If your target is awakened, the spell ends.",
};

SpellsList["electric eels"] = {
    name : "Electric eels",
    classes : ["druid"],   
    source : ["DM2", 175],
    level : 4,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "an eel's eye", 
    duration : "Conc, 1 min", 
    description : "Smmn 2 lightning eels, each can melee spell atk crea in 5 ft, 2d6 + spell mod dmg, rpt on bns",
    descriptionFull : "You create two lightning bolts shaped like eels in unoccupied spaces you can see within range that last for the duration or until you cast this spell again. When you cast the spell, you can force each lightning eel to emit a single bolt of lightning at a creature within 5 feet of it. Make one melee spell attack for each eel. On a hit, the target takes lightning damage equal to 2d6 + your spellcasting ability modifier." + "\n   " + "As a bonus action on your turn, you can move each lightning eel up to 30 feet and repeat the attack against a creature within 5 feet of it." + "\n   " + "If one lightning eel is within 5 feet of you, you have resistance to lightning damage. If both eels are within 5 feet of you, you have immunity to lightning damage.", 
};

SpellsList["elemental exchange"] = {
    name : "Elemental Exchange",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 175],
    level : 3,
    school : "Trans",
    time : "1 rea", 
	timeFull : "1 reaction, which you take when a creature you can see uses a feature or casts a spell that requires a saving throw to avoid or reduce acid, cold, fire, lightning, or thunder damage", 
    range : "60 ft", 
    components : "S", 
    duration : "Instantaneous", 
    save : "Cha", 
    description : "Twist properties of a spell from one element into another, save or change to element of your choice.",
    descriptionFull : "You twist the elemental properties of a spell, breath weapon, or other effect utilizing elemental energies to shift from its current element into another. The creature causing the triggering spell or effect (such as a red dragon’s Fire Breath, an ankheg’s Acid Spray, a kraken’s Lightning Storm, the cone of cold spell, or similar) must succeed on a Charisma saving throw or the damage the effect deals changes to one of the following damage types of your choice: acid, cold, fire, lightning, or thunder.",
};
 

SpellsList["elemental infusion"] = {
    name : "Elemental infusion",
    classes : ["druid"],   
    source : ["DM2", 175],
    level : 1,
    school : "Trans", 
    time : "1 bns", 
    range : "60 ft", 
    components : "V,S",  
    duration : "Conc, 1 h", 
    description : "Infuse ally's weapon with either acid/cold/fire/lightn/poison/thunder dmg",
    descriptionFull : "You infuse an ally’s weapon with the power of the elements. Choose a weapon worn or carried by a friendly creature within range and choose one of the following damage types: acid, cold, fire, lightning, poison, or thunder. Until the spell ends, that weapon’s damage type changes from its normal type to the chosen type. The spell ends early if the weapon is held by a hostile creature at the start of your turn or if the weapon is not in the possession of a friendly creature for more than 1 minute." + AtHigherLevels + "When you cast this  spell using a spell slot of 2nd level or higher, you can target one additional weapon for each slot level above 1st. All affected weapons are changed to the same damage type.",
};

SpellsList["everans scorching serpents"] = {
    name : "Everan’s scorching serpents",
	nameShort : "Ev's scorching serpents",
    classes : ["druid"],   
    source : ["DM2", 177],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "A pinch of ash wrapped in snakeskin", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "1 crea save or grappled by fiery serpents, 4d6 fire dmg, 2d6 each round",
    descriptionFull : "You summon a serpent made of flames to burn and constrict one creature you can see within range. The target must make a Strength saving throw. On a failed save, the target takes 4d6 fire damage and is grappled by the fiery serpent. On a successful save, the target takes half the damage and isn’t grappled. At the end of each of the grappled target’s turns, it takes 2d6 fire damage. A creature grappled by the fiery serpent can use its action to make a Strength or Dexterity check (the target’s choice) against your spell save DC. If it succeeds, it is no longer grappled, and the spell ends on it." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd. The targets must be within 30 feet of each other when you target them.",
};

SpellsList["flight of ideas"] = {
    name : "Flight of Ideas",
    classes : ["druid", "bard", "cleric", "paladin", "ranger", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 181],
    level : 3,
    school : "Ench", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,M", 
    compMaterial : "a moonstone worth 500 gp", 
    duration : "Conc, 1 min", 
    save : "Cha", 
    description : "Fill mind of humanoid with ideas of the fey, save or bewildered, see b",
    descriptionFull : "You tap into the realm of the fey and fill the mind of one Humanoid you can see within range with eerie ideas, thoughts, and songs of the fey. The target must succeed on a Charisma saving throw or be bewildered for the duration. The bewildered target must spend each of its turns moving up to half its speed in a random direction and chattering eccentrically, expressing the ideas infiltrating its mind. This movement doesn’t provoke opportunity attacks. " + "\n   " + "At the end of each of its turns, the target can make another Charisma saving throw. On a success, the spell ends on the target." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, you can target one additional Humanoid for each slot level above 3rd. The Humanoids must be within 30 feet of each other when you target them.",
};
 

SpellsList["galvanize metal"] = {
    name : "Galvanize metal",
    classes : ["druid"],   
    source : ["DM2", 182],
    level : 2,
    school : "Trans", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "A piece of magnetized iron", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Electrify metal object e.g. weapon/armor, 1d8 lightning dmg, cant take reactions, repeat dmg on bns",
    descriptionFull : "Choose a manufactured metal object, such as a metal weapon or a suit of heavy or medium metal armor, that you can see within range. You cause the object to electrify. Any creature in physical contact with the object takes 1d8 lightning damage when you cast the spell and can’t take reactions until the start of its next turn. Until the spell ends, you can use a bonus action on each of your subsequent turns to cause this effect again. If a creature is holding or wearing the object and takes damage from it, the creature must succeed on a Constitution saving throw or be unable to part with the object." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.",
};
  

SpellsList["heartfire"] = {
    name : "Heartfire",
    classes : ["druid"],   
    source : ["DM2", 187],
    level : 2,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "1 crea save or take 3d6 fire dmg from your inner fire, allies nearby can give extra 1d6 each",
    descriptionFull : "You ignite the inner fire within you and your companions, stoking it into a magical flame against your enemies. A gout of fire emerges from your chest and streaks toward one creature you can see within range. The target must make a Dexterity saving throw, taking 3d6 fire damage on a failed save, or half as much damage on a successful one. When you cast this spell, up to three friendly creatures within 30 feet of you that can see you can each use a reaction to lend its heartfire to yours. For each creature that joins its heartfire with yours, the spell’s damage increases by 1d6." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the primary damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["krails rupture"] = {
    name : "Krail’s rupture",
    classes : ["druid"],   
    source : ["DM2", 193],
    level : 2,
    school : "Necro", 
    time : "1 a", 
	timeFull : "1 reaction, which you take in response to being grappled or swallowed whole", 
    range : "Touch", 
    components : "S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "1 crea save or you break grapple/swallow and magically enter and exit their body, 3d12 necro dmg",
    descriptionFull : "You make a slicing motion with your finger, and you immediately break the grapple of the creature grappling you by magically entering their body and exiting them on the opposite side. The creature must make a Constitution saving throw, taking 3d12 necrotic damage on a failed save or half as much damage on a successful one" + "\n   " + "If cast in response to being swallowed, you exit the triggering creature’s body, regardless of how much damage you deal to it, and fall prone in a space within 10 feet of the triggering creature." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage  increases by 1d12 for each slot level above 2nd.",
};

SpellsList["miniature hurricane"] = {
    name : "Miniature hurricane",
    classes : ["druid"],   
    source : ["DM2", 201],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a stone submerged in a jar of seawater", 
    duration : "Conc, 1 min", 
    save : "Con", 
    description : "Conjure mini hurricane, 40ft cylinder 20ft rad save or 3d6 cold dmg, speed halved",
    descriptionFull : "You conjure a miniature hurricane on a point you can see within range. The hurricane forms in a 40-foot-tall cylinder with a 20-foot-radius centered on that point. When a creature enters the spell’s area for the first time on a turn or starts its turn there, it is buffeted by rain, ice pellets, and roaring wind and must make a Constitution saving throw. On a failed save, a creature takes 3d6 cold damage, and its speed is halved until it leaves the hurricane. On a successful save, a creature takes half the damage, and its speed isn’t reduced. Until the spell ends, the hurricane moves up to 20 feet in a random direction at the start of each of your turns. To determine the direction, roll a d8 and assign a direction to each die face.",
};

SpellsList["ominous winds"] = {
    name : "Ominous winds",
    classes : ["druid"],   
    source : ["DM2", 205],
    level : 2,
    school : "Ench", 
    time : "1 a", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a cracked bone", 
    duration : "Conc, 1 min", 
    save : "Cha", 
    description : "3 crea of choice save or subtract 1d8 from attack rolls or saving throws.",
    descriptionFull : "Up to three creatures of your choice that you can see within range must make Charisma saving throws. Whenever a target that fails this saving throw makes an attack roll or a saving throw before the spell ends, the target must roll a d8 and subtract the number rolled from the attack roll or saving throw." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};

SpellsList["part clouds"] = {
    name : "Part clouds",
    classes : ["druid"],   
    source : ["DM2", 206],
    level : 6,
    school : "Conj", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "A sun-bleached wind instrument carved from wood", 
    duration : "Conc, 1 h", 
    description : "Nonmagical smoke/clouds/fog within 1 mile clear, you can't become lost",
    descriptionFull : "The clouds miraculously part within 1 mile of you for the duration. You must be outdoors to cast this spell. Moving to a place where you don’t have a clear path to the sky ends the spell early. When you cast this spell, nonmagical smoke, clouds, fog, and other obscuring mists, including the clouds in the sky, disperse in the area. Magical smoke, clouds, fog, and other obscuring mists disperse after 1 minute in the area. Until the spell ends, you can’t become lost while you travel, and the area is filled with bright sunlight if it is day or dim light if it is night.",
};

SpellsList["radiant rosette"] = {
    name : "Radiant rosette",
    classes : ["druid"],   
    source : ["DM2", 212],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a dandelion stalk", 
    duration : "Conc, 1 min", 
	description : "Magic dandelion, ranged spell attack to send glowing seeds, 3d6 rad dmg, repeat as action",
    descriptionFull : "A rosette of magic resembling a dandelion of energy appears in your hand. The magical flower remains there for the duration. When you cast this spell, you blow gently on the rosette, sending a stream of glowing seeds at a creature you can see within 60 feet of you. Make a ranged spell attack against the target. On a hit, the target takes 3d6 radiant damage. Until the spell ends, you can blow on the rosette and make the attack again on each of your turns as an action." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.",
};

SpellsList["rite of rain"] = {
    name : "Rite of rain",
    classes : ["druid"],   
    source : ["DM2", 216],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S", 
    duration : "1 h", 
	ritual : true, 
    description : "Summon rains 30ft rad, difficult terrain for enemies, reroll 1s on dmg die for cold/lightning spells",
    descriptionFull : "You conduct a special rite through dance or prayer. At the end of the rite, you touch a point on the ground beneath you. For the duration, the area within 30 feet of that point is blessed by refreshing rains. The area is difficult terrain for creatures hostile to you. In addition, when a creature in the area rolls a 1 on a damage die for a spell that deals cold damage or lightning damage, the creature can reroll the die and must use the new roll. "  + "\n   " + "If you cast this spell every day for 10 days in the same location, plants in the area grow twice as quickly and yield twice as much for 1 year.",
};

SpellsList["sear"] = {
    name : "Sear",
    classes : ["druid"],   
    source : ["DM2", 217],
    level : 3,
    school : "Evoc", 
    time : "1 a", 
    range : "S:30-ft cone", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Exhale searing wind, save or 5d8 fire dmg and pushed to cone edge, ignites obj, disperse gas",
    descriptionFull : "You exhale searing hot wind in a 30-foot cone. Each creature in the area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage and is pushed away from you in a direction following the cone up to the edge of the cone. On a successful save, a creature takes half the damage and isn’t pushed."  + "\n   " + "The wind disperses gas or vapor in the area, and it ignites flammable objects in the area that aren’t being worn or carried." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd.",
};

SpellsList["seismic shift"] = {
    name : "Seismic Shift",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 2],
    level : 4,
    school : "Evoc", 
    time : "1 a", 
	timeFull : "1 reaction, which you take when ", 
    range : "60 ft", 
    components : "V,S,M", 
    compMaterial : "a small piece of sandstone", 
    duration : "Instantaneous", 
    save : "D/S", 
    description : "60x10ft line ",
    descriptionFull : "You disrupt the ground in a line 60 feet long and 10 feet wide extending from you in a direction you choose. You cause one of the following effects: " + "\n   " + "Collapse. The ground crumbles in the line. Each creature in the line must make a Dexterity saving throw. On a failed save, a creature is restrained as it sinks a few feet into the ground. On a successful save, a creature’s speed is reduced by 10 feet until the end of its next turn as its feet and legs are covered in thick layers of earth. A restrained creature can use its action to make a Strength check against your spell save DC. If it succeeds, it is no longer restrained. " + "\n   " + "Rupture. The ground bursts away from you along the line. Each creature in the line must make a Strength saving throw. On a failure, a creature is pushed up to 60 feet away from you in a direction following the line and knocked prone. On a successful save, a creature is pushed half the distance and isn’t knocked prone.",
};
 
  
  SpellsList["servant of doom"] = {
    name : "Servant of Doom",
    classes : ["druid", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 218],
    level : 4,
    school : "Trans", 
    time : "1 bns", 
    range : "Self", 
    components : "V", 
    duration : "Conc, 1 min", 
    save : "Wis", 
    description : "Assume the form of Emissary (wis/int based save bonus) or Envoy (str/dex based save bonus) see b",
    descriptionFull : "A force of destruction gifts you a portion of its power. Each time you cast this spell, you choose whether to assume the form of the emissary or the form of the envoy for the duration." + "\n   " + " Emissary. The blood in your veins shines through your skin, extra eyes open in your flesh, and you gain the following benefits:" + "\n   " + " • You gain a flying speed equal to your walking speed and the ability to hover, though you must stay within 5 feet of the ground. • You gain truesight out to a range of 60 feet. • Creatures have disadvantage on Wisdom saving throws against your spells and abilities. • You have advantage on Intelligence- or Wisdom-based attack rolls." + "\n   " + "Envoy. Your skin becomes stonelike, bony growths erupt across your body, and you gain the following benefits:" + "\n   " + " • You ignore difficult terrain for movement purposes. • Yo  can move through walls and other solid barriers if you succeed on a Strength check you make just before moving up to the barrier. The DC equals 10 + twice the barrier’s thickness in feet. • You have advantage on Strength- or Dexterity-based attack rolls. • Your melee weapon attacks deal an extra 1d6 slashing damage on a hit.", 
};
 

SpellsList["spirit balm"] = {
    name : "Spirit balm",
    classes : ["druid"],   
    source : ["DM2", 225],
    level : 2,
    school : "Evoc", 
    time : "1 a", 
    range : "30 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    description : "Divine/nature spirit, you + 1 ally gain spellcasting modifier HP, end charmed/frightened condition",
    descriptionFull : "You call on a divine spirit or a spirit of nature to heal your wounds and calm your mind. You and one willing creature you can see within range regain a number of hit points equal to your spellcasting ability modifier, and you can choose to end either the charmed or frightened condition on each of you." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, you can target one additional creature for each slot level above 2nd.",
};

SpellsList["spray"] = {
    name : "Spray",
    classes : ["druid", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 226],
    level : 1,
    school : "Conj", 
    time : "1 a",  
    range : "self:30ft line", 
    components : "V,S", 
    duration : "Conc, 1 min", 
    save : "Str", 
    description : "Torrent of water 30x5ft line,save or 3d6 bludg dmg, pushed 15ft away, prone",
    descriptionFull : "You conjure a powerful torrent of water in a line that is 30 feet long and 5 feet wide. Each creature in the line must make a Strength saving throw. On a failed save, the creature suffers 3d6 bludgeoning damage, is pushed up to 15 feet away from you in a direction following the line, and knocked prone. On a successful save, the creature takes half the damage and isn’t pushed or knocked prone." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.",
};
 

SpellsList["storm door"] = {
    name : "Storm door",
    classes : ["druid"],   
    source : ["DM2", 227],
    level : 4,
    school : "Conj", 
    time : "1 a", 
    range : "self", 
    components : "V,S,M", 
    compMaterial : "A piece of fulgurite", 
    duration : "Conc, 10 min", 
    save : "Dex", 
    description : "Teleport 120 ft, crea in 5 ft save or 1d12 dmg, repeat each rd, see b",
    descriptionFull : "Crackling with lightning, you teleport up to 120 feet to an unoccupied space that you can see. Each creature within 5 feet of both the space you left and your new space must make a Dexterity saving throw. A creature takes 1d12 lightning damage on a failed save or half as much damage on a successful one." + "\n   " + " On each of your turns for the duration, you can use your bonus action to call up the lightning and open such a storm door again, targeting a different space with the door each time. If you are outdoors when you cast this spell, a storm develops within 1 minute and follows you, and under such conditions, the spell’s damage increases to 2d12, and you can teleport up to 240 feet." + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, a creature of your choice within 5 feet of you can teleport through the storm door with you. Accompanying creatures do not suffer the lightning damage.",
};

SpellsList["storm step"] = {
    name : "Storm step",
    classes : ["druid"],   
    source : ["DM2", 228],
    level : 2,
    school : "Conj", 
    time : "1 a", 
    range : "Self", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Con", 
    description : "Teleport with clap of thunder, crea in 5ft of origin and destination save or 2d6 thunder dmg",
    descriptionFull : "You release a clap of thunder as you teleport to an unoccupied space you can see within 30 feet of you. Each creature within 5 feet of your origin and destination spaces must make a Constitution saving throw, taking 2d6 thunder damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 1st.",
};

SpellsList["thresh the battlefield"] = {
    name : "Thresh the battlefield",
    classes : ["druid"],   
    source : ["DM2", 230],
    level : 6,
    school : "Conj", 
    time : "1 a", 
    range : "Self:60-ft", 
    components : "V,S,M", 
    compMaterial : "wheat dipped in giant's blood", 
    duration : "Instantaneous", 
    save : "Dex", 
    description : "Magical threshing blade cone, save or 6d10 slash dmg, on fail is lacerated, 1d10 dmg each turn",
    descriptionFull : "You create a magical threshing blade that spins and grows as it flies out from you. Each creature in a 60-foot cone must make a Dexterity saving throw. On a failed save, a creature takes 6d10 slashing damage and is lacerated for 1 minute. On a successful save, a creature takes half the damage and isn’t lacerated. A lacerated creature takes 1d10 slashing damage at the start of each of its turns and can’t regain hit points until the laceration ends. At the end of each of its turns, a lacerated creature can make a Constitution saving throw. On a success, the laceration ends. Alternatively, a creature can take an action to stanch the laceration with a successful Wisdom (Medicine) check against your spell save DC." + AtHigherLevels + "When you cast this spell using a spell slot of 7th level or higher, the damage (both initial and later) increases by 1d10 for each slot level above 6th.",
};

SpellsList["transmogrification"] = {
    name : "Transmogrification",
    classes : ["druid", "cleric", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 231],
    level : 7,
    school : "Trans", 
    time : "1 a", 
    range : "Self", 
    components : "V,S,M", 
    compMaterial : "a bit of flesh from a fiend, or a feather from a celestial, either worth at least 50 gp", 
    duration : "Conc, 10 min", 
    description : "Change body, gain 3 effects, bns a to change effect,",
    descriptionFull : "You elevate your body to a higher form. When you cast the spell, choose three of the forms described below and indicate which one’s effects will occur first. While the spell lasts, you can use a bonus action to exchange one of your choices for an unused one, or to make a new choice when the current one ends. The spell ends when its duration expires or when you expend all available uses of the third form you adopt." + "\n   " + "Wings. You sprout wings from your shoulders and gain a flying speed of 60 feet. The wings can be batlike or feathered. " + "\n   " + "Breath Weapon. You gain a breath  weapon of one of these types of your choice: acid, cold, fire, lightning, or poison. You can use an action to unleash your breath weapon in a 15-foot line that is 5 feet wide. Each creature in the line takes 8d6 damage of the chosen type, or half as much damage with a successful Dexterity saving throw. The breath weapon is considered a magical attack. You can use this ability up to three times, and it expires after the third use." + "\n   " + "Limbs. Appendages resembling tentacles, spider legs, pincers, or something else of your choosing sprout from your body. Choose slashing, bludgeoning, or piercing damage; you can use an action to make two melee weapon attacks with your new limbs, and each attack deals 2d12 damage of the chosen type. You are proficient with these weapons, and they have the reach and finesse properties. " + "\n   " + "Radiating Light. You emit light in a 10-foot radius. The light can come from a halo, from ghostly flames, from your eyes, or any other source you choose. The light deals your choice of necrotic, fire, or radiant damage. A creature that passes through the light on its turn or that ends its turn in the light takes 2d10 damage of the chosen type, or half as much damage with a successful Constitution saving throw. A creature takes this damage only once per turn." + "\n   " + "Regeneration. You regain 10 hit points at the start of your turn. You can use this ability up to three times, and it expires after the third use. Overwhelming Might. When you hit a target with a weapon attack, the target takes an extra 2d8 force damage and must succeed on a Strength saving throw or be knocked prone. " + "\n   " + "Frightening Presence. As an action, choose any number of creatures within 30 feet of you that can see you. Each of them must succeed on a Wisdom saving throw or become frightened of you for 1 minute. A creature frightened in this way can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature’s saving throw is successful or the effect ends for it, the creature is immune to your frightening presence for the next 24 hours. You can use this ability up to three times, and it expires after the third use.",
};
 
  
  SpellsList["weirding wake"] = {
    name : "Weirding Wake",
    classes : ["druid", "sorcerer", "wizard"],   
    source : ["DM1", 237],
    level : 5,
    school : "Conj", 
    time : "1 a", 
    range : "300 ft", 
    components : "V,S", 
    duration : "Instantaneous", 
    save : "Str", 
    description : "Wave of water 30ftx10ft line, save or 8d8 bludg dmg, pushed 15ft, knocked prone",
    descriptionFull : "You create a wave of water that rushes in a 30-foot line that is 10 feet wide from a point you can see within range. Each creature in the line must make a Strength saving throw. On a failed save, a creature takes 8d8 bludgeoning damage, is pushed up to 15 feet in a direction following the line, and knocked prone. On a successful save, a creature takes half the damage and isn’t pushed or knocked prone." + "\n   " + "If you cast this spell on a point of freestanding water that is at least 20 feet deep, the line is 60 feet long instead, and any waterborne vehicle in the line has a 30 percent chance of capsizing if it is Large or smaller and a 15 percent  chance of capsizing if it is Huge." + AtHigherLevels + "When you cast this spell with a spell slot of 6th level or higher, the damage increases by 1d8 and the chance for a waterborne vehicle to capsize increases by 5 percent for each slot level above 5th.",
};
 
  
  SpellsList["windblown"] = {
    name : "Windblown",
    classes : ["druid", "sorcerer", "warlock", "wizard"],   
    source : ["DM1", 238],
    level : 4,
    school : "Trans", 
    time : "1 a", 
    range : "Touch", 
    components : "V,S,M", 
    compMaterial : "a pinch of quail down", 
    duration : "Conc, 1 min", 
    save : "Dex", 
    description : "Blast of air launches crea, save or thrown up to 60ft, if hits ceiling takes fall dmg or floats until spell ends",
    descriptionFull : "A blast of air forms beneath a creature you can see within range, launching the creature into the air. If the target isn’t somehow anchored to the ground, it is thrown up to 60 feet into the air. It can make a Dexterity saving throw to grab onto a fixed object it can reach, thus avoiding the launch." + "\n   " + "If some solid object (such as a ceiling) is encountered on the way up, the target strikes the object and takes falling damage just as if it had fallen the same distance. If the target reaches the full height of 60 feet without striking anything, it remains buoyant, bobbing in the air, for the duration and can be blown along with the prevailing wind." + "\n   " + "When the spell ends, the target falls to the ground, taking falling damage as normal. This spell has no effect against a creature with a flying speed.",
};
 
