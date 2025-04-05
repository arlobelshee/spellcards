import {describe, it, expect} from "vitest";
import {IncludeEverythingFilter} from "@/boundaries/engine/spell_selection";
import {TestData} from "@/boundaries/__tests__/test_data";

describe("The all spells filter", ()=> {
    it("should include every spell", ()=> {
        const test_subject = new IncludeEverythingFilter(TestData.all_spells.spells);
        expect(test_subject.descriptions.map(s=> s.spell.id)).toEqual(Object.keys(TestData.all_spells.spells));
        expect(test_subject.descriptions).not.toContain({already_printed: true});
    });
    it("should select the rituals correctly", ()=> {
        const test_subject = new IncludeEverythingFilter(TestData.all_spells.spells);
        expect(test_subject.rituals.map(s=> s.spell.id)).toEqual(["ritual-spell"]);
        expect(test_subject.rituals).not.toContain({already_printed: true});
    });
    it("should have selectables for every spell", ()=> {
        const test_subject = new IncludeEverythingFilter(TestData.all_spells.spells);
        expect(test_subject.selectable.map(s=> s.spell.id)).toEqual(Object.keys(TestData.all_spells.spells));
        expect(test_subject.selectable).not.toContain({already_printed: true});
    });
});