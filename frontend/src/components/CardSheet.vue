<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
import all_spells from "@/assets/all_spells.json";

const props = defineProps<{ category: string }>();
const sheet_data = ref({});
watchEffect(
  async () => (sheet_data.value = await import(`../assets/${props.category}/${useRoute().params.slug}.json`)),
);
</script>

<template>
  <h1>Put lots of cards here!</h1>
  <p>Notes:</p>
  <ul>
    <li>
      For characters:
      <ul>
        <li>
          Right nav:
          <ul>
            <li>
              Can enter computed char values. Spellcasting classes, each with level & bonus to atk, DC, and memorized
              spells. 6 attribute final adjusted modifiers. System will compute proficinecy bonus, then atk, DC, &
              memorization slots by class. Will also compute total spell slots (both regular & pact magic).
            </li>
            <li>
              Can select spells for Wizard, Sorc, Warlock, Bard, Artificer. Not for Cleric, Druid. Well, for Cleric &
              Druid can select bonus spells (domain, etc).
            </li>
            <li>
              Can enter limited effects. These are like spells - and may even be added to the system as if they were
              spells. They will just appear differently on the spell slot & limited effect organizer.
            </li>
          </ul>
        </li>
        <li>
          Main area:
          <ul>
            <li>
              Ritual book cards:
              <ul>
                <li>
                  These are intended for the character book, but when it is closed - not the take-out pages to use live.
                  Or maybe the spellbook book. Haven't decided yet.
                </li>
                <li>
                  Each is sized like a "full" card, so can print them and slot them easily into regular card pages.
                </li>
                <li>
                  Each contains several printed rituals, which look like sub-cards. Together, this lets me easily print
                  a ritual book as a set of cards & put them in a sleeve page.
                </li>
              </ul>
            </li>
            <li>
              Memorized spells cards:
              <ul>
                <li>
                  These are intended to go onto spell loadout sheets. Each sheet contains one common set of
                  memorization, for one common circumstance.
                </li>
                <li>
                  These are tiny, using icons mostly. They also include the character's RP suggestions per spell. This
                  is the place to edit those. Can also edit in spellbook, if desired.
                </li>
                <li>Can easily print several copies of each one. Pick a number; shows that many.</li>
                <li>
                  Can assign a character-specific name to these. Will be used on the memorization card, with full
                  game-rules name listed for reference.
                </li>
              </ul>
            </li>
            <li>
              Spellbook reference cards:
              <ul>
                <li>
                  These print the same for all characters, so can re-use the spellbook section & don't have to re-print
                  cards when leveling. Can select on any card that it has already been printed, and it'll move to the
                  non-printing cards section.
                </li>
                <li>
                  On screen, they include the RP suggestions per spell, though those suggestions only actually appear in
                  the morized spell cards display when printed.
                </li>
                <li>
                  Can pick the number of memorization mini-cards to print for each spell card - whether that spell card
                  is being printed or not.
                </li>
                <li>
                  Have a section to show, greyed out and just names, all the spells that are already printed. Can use
                  this to select one to print again.
                </li>
              </ul>
            </li>
            <li>
              Limited effect organizer page:
              <ul>
                <li>Intended to store in the character book and be pulled out for play.</li>
                <li>
                  Includes Atk/DC by class, in tight form. These are color-coded, with colors matching the memorization
                  card colors. Also indicates number of memorizations you get.
                </li>
                <li>
                  Prints out a page intended to hold dice to show slots remaining, refresh times, etc. Each item has a
                  square sized to fit a d6. Inside the square is the number you get on a refresh. Under the square is
                  the kind of rest that lets you refresh.
                </li>
                <li>
                  Includes regular casting slots by level. Also includes pact magic slots, which indicate their level
                  (basically like regular slots, but without other regular slots around them, and with different
                  refresh)
                </li>
                <li>Non-slot actions are like slots unless they are special cased.</li>
                <li>
                  Arcane abeyance, eg, contains 2 blank spots each the size of a memorization spell. Can put one on to
                  store a bead, then turn upside down to show slot was used. Spell storing devices could work similarly.
                </li>
              </ul>
            </li>
            <li>
              Spell loadout page:
              <ul>
                <li>
                  Intended to store in the character book with one at a time pulled out for play, to match expected
                  circumstances. Includes a name for the circumstance. I don't know how individual spell cards are
                  attached to a loadout sheet.
                </li>
                <li>
                  Can be printed with fixed choices (Bard, Sorc, Warlock), or for selection (Cleric, Wizard, Druid).
                  Special actions are also pre-printed, since they are always available.
                </li>
                <li>
                  They are merged across all classes, so multi-class might have some fixed in slot + some open spaces.
                </li>
                <li>Segments spells by level & by action type, for fast use in combat.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>For sources: Dunno. Just show all the spells in large format?</li>
    <li>For all spells list: Dunno. Just show all the spells in large format?</li>
  </ul>
  <p>Stuff to show:</p>
  <div>{{ JSON.stringify(sheet_data) }}</div>
  <p>All spells:</p>
  <div>{{ JSON.stringify(all_spells) }}</div>
</template>
