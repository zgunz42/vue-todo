import NoteGroupList from "@/components/NoteGroupList.vue";
import {Note} from "../../types";
import {factory} from "./utils";
import NoteGroupListItem from "@/components/NoteGroupListItem.vue";

describe('NoteGroupListItem', function () {
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
});
