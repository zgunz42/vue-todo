import TodoGroupListItem from "@/components/NoteGroupListItem.vue";
import {Note} from "../../types";
import {factory} from "./utils";
import {BButton, BCardText} from "bootstrap-vue";


describe("NoteGroupListItem.vue", () => {
  it('should required note props', function () {
    const wrapper = new TodoGroupListItem();

    expect((wrapper.$options.props as any).note.required).toBeTruthy();
  });

  it('should display note', function () {
    const note: Note = {
      id: 1,
      message: 'foo',
      group: "doing",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {note});

    const messageWrapper = wrapper.findComponent(BCardText);

    expect(messageWrapper.text()).toContain('foo')
  });

  it('should  display <, > button on group doing', function () {
    const note: Note = {
      id: 1,
      message: 'foo',
      group: "doing",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {note});

    const svgs = wrapper.findAll('.bi-chevron-left.b-icon.bi, .bi-chevron-right.b-icon.bi');

    expect(svgs.length).toEqual(2);
  });

  it('should not display < button on group note', function () {
    const note: Note = {
      id: 1,
      message: 'foo',
      group: "done",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {note});

    const svgs = wrapper.findAll('.bi-chevron-left.b-icon.bi, .bi-chevron-right.b-icon.bi');

    expect(svgs.length).toEqual(1);
    expect(svgs.at(0).classes()).toContain('bi-chevron-left');
  });

  it('should not display > button on group done', function () {
    const note: Note = {
      id: 1,
      message: 'foo',
      group: "todo",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {note});

    const svgs = wrapper.findAll('.bi-chevron-left.b-icon.bi, .bi-chevron-right.b-icon.bi');

    expect(svgs.length).toEqual(1);
    expect(svgs.at(0).classes()).toContain('bi-chevron-right');
  });

  it('should emmit moveToGroup doing when button clicked', function () {
    const note: Note = {
      id: 1,
      message: 'foo',
      group: "todo",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {note});
    const button = wrapper.findComponent(BButton);
    button.element.click();

    expect(wrapper.emitted()).toHaveProperty('move-to-group', [['doing', 1]]);
  });


  it('should emmit moveToGroup done when button clicked', function () {
    const note: Note = {
      id: 1,
      message: 'foo',
      group: "done",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {note});
    const button = wrapper.findComponent(BButton);
    button.element.click();

    expect(wrapper.emitted()).toHaveProperty('move-to-group', [['doing', -1]]);
  });
});
