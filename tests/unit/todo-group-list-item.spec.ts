import TodoGroupListItem from "@/components/TodoGroupListItem.vue";
import {Todo} from "../../types";
import {factory} from "./utils";
import {BButton, BCardText} from "bootstrap-vue";


describe("TodoGroupListItem.vue", () => {
  it('should required todo props', function () {
    const wrapper = new TodoGroupListItem();

    expect((wrapper.$options.props as any).todo.required).toBeTruthy();
  });

  it('should display todo', function () {
    const todo: Todo = {
      id: 1,
      message: 'foo',
      group: "doing",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {todo});

    const messageWrapper = wrapper.findComponent(BCardText);

    expect(messageWrapper.text()).toContain('foo')
  });

  it('should  display <, > button on group doing', function () {
    const todo: Todo = {
      id: 1,
      message: 'foo',
      group: "doing",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {todo});

    const svgs = wrapper.findAll('.bi-chevron-left.b-icon.bi, .bi-chevron-right.b-icon.bi');

    expect(svgs.length).toEqual(2);
  });

  it('should not display < button on group todo', function () {
    const todo: Todo = {
      id: 1,
      message: 'foo',
      group: "done",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {todo});

    const svgs = wrapper.findAll('.bi-chevron-left.b-icon.bi, .bi-chevron-right.b-icon.bi');

    expect(svgs.length).toEqual(1);
    expect(svgs.at(0).classes()).toContain('bi-chevron-left');
  });

  it('should not display > button on group done', function () {
    const todo: Todo = {
      id: 1,
      message: 'foo',
      group: "todo",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {todo});

    const svgs = wrapper.findAll('.bi-chevron-left.b-icon.bi, .bi-chevron-right.b-icon.bi');

    expect(svgs.length).toEqual(1);
    expect(svgs.at(0).classes()).toContain('bi-chevron-right');
  });

  it('should emmit moveToGroup doing when button clicked', function () {
    const todo: Todo = {
      id: 1,
      message: 'foo',
      group: "todo",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {todo});
    const button = wrapper.findComponent(BButton);
    button.element.click();

    expect(wrapper.emitted()).toHaveProperty('move-to-group', [['doing', 1]]);
  });


  it('should emmit moveToGroup done when button clicked', function () {
    const todo: Todo = {
      id: 1,
      message: 'foo',
      group: "done",
      createAt: new Date()
    };

    const wrapper = factory(TodoGroupListItem, {todo});
    const button = wrapper.findComponent(BButton);
    button.element.click();

    expect(wrapper.emitted()).toHaveProperty('move-to-group', [['doing', -1]]);
  });
});
