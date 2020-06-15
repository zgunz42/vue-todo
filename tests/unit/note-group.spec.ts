import {factory} from "./utils";
import NoteGroup from "@/components/NoteGroup.vue";
import {State} from "../../types";
import NoteGroupListItem from "@/components/NoteGroupListItem.vue";

describe('NoteGroup.vue', function () {
  it('should render title', function () {
    const wrapper = factory(NoteGroup, {
      group: "todo"
    });

    expect(wrapper.text()).toContain("todo")
  });
  it('should display todo from state', function () {
    const state: State = {
      data: {
        1: {
          id: 1,
          message: 'bar',
          createAt: new Date()
        },
        2: {
          id: 2,
          message: 'foo',
          createAt: new Date()
        }
      },
      doing: [],
      done: [],
      todo: [1],
      notes: [1]
    };

    const wrapper = factory(NoteGroup, {
      group: "todo"
    }, state);

    const notes = wrapper.findAllComponents(NoteGroupListItem);

    expect(notes).toHaveLength(1);
    expect(notes.at(0).text()).toContain("bar")

  });
});
