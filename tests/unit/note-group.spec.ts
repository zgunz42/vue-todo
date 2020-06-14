import {factory} from "./utils";
import NoteGroup from "@/components/NoteGroup.vue";

describe('NoteGroup.vue', function () {
  it('should render title', function () {
    const wrapper = factory(NoteGroup, {
      group: "todo",
      notes: []
    });

    expect(wrapper.text()).toContain("todo")
  });
});
