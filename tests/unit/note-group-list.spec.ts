import NoteGroupList from "@/components/NoteGroupList.vue";
import {Note} from "../../types";
import {factory} from "./utils";
import NoteGroupListItem from "@/components/NoteGroupListItem.vue";
import {warn} from "vue-class-component/lib/util";
import {BButton} from "bootstrap-vue";

describe('NoteGroupList.vue', function () {
  it('should render empty state', function () {
    const wrapper = factory(NoteGroupList, {
      notes: []
    });
    const info = wrapper.find('p');
    expect(info.text()).toContain('Has Empty Note Item')
  });
  it('should order list item on date', function () {
    const notes: Note[] = [
      {
        id: 1,
        message: 'foo',
        createAt: new Date(2020, 6, 11),
        group: "todo"
      },
      {
        id: 2,
        message: 'bar',
        createAt: new Date(2020, 6, 2),
        group: "todo"
      }
    ];

    const wrapper = factory(NoteGroupList, {
      notes
    });

    const listWrapArray = wrapper.findAllComponents(NoteGroupListItem);

    expect(listWrapArray.at(0).text()).toContain('bar');
    expect(listWrapArray.at(1).text()).toContain('foo');
  });

  it('should emmit noteGroupChange when list item clicked ', function () {
    const notes: Note[] = [{
      id: 1,
      message: "foo",
      group: "doing",
      createAt: new Date()
    }];

    const wrapper = factory(NoteGroupList, {notes});
    const noteWrapper = wrapper.findComponent(NoteGroupListItem);

    noteWrapper.findComponent(BButton).element.click();  // click done button

    expect(wrapper.emitted()).toHaveProperty('note-group-change', [[{note: notes[0], nextGroup: "done"}, 1, "done"]]);
  });
});
