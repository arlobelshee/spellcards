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
              Can enter computed char values. Spellcasting classes, each with level & bonus to atk & DC. 6 attribute
              final adjusted modifiers. System will compute proficinecy bonus, then atk & DC for that class. Will also
              compute total spell slots (both regular & pact magic).
            </li>
            <li>
              Can select spells for Wizard, Sorc, Warlock. Not for Cleric, Druid. Well, for Cleric & Druid can select
              bonus spells (domain, etc).
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
                  It can print out blank (but named context) spell loadout sheets. I don't know how individual spells
                  cards are attached to a loadout sheet.
                </li>
                <li>These are tiny, using icons mostly. They also include the character's RP suggestions per spell. This
                  is the place to edit those. Can also edit in spellbook, if desired.</li>
                <li>Can easily print several copies of each one. Pick a number; shows that many.</li>
              </ul>
            </li>
            <li>Spellbook reference cards:<ul>
                <li>These print the same for all characters, so can re-use the spellbook section & don't have to
                  re-print cards when leveling. Can select on any card that it has already been printed, and it'll move
                  to the non-printing cards section.</li>
                <li>On screen, they include the RP suggestions per spell, though those suggestions only actually appear
                  in the morized spell cards display when printed.</li>
                <li>Can pick the number of memorization mini-cards to print for each spell card - whether that spell
                  card is being printed or not.
                </li>
                <li>Have a section to show, greyed out and just names, all the spells that are already printed. Can use
                  this to select one to print again.</li>
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
