import {createLocalVue, mount} from "@vue/test-utils";
import TodoGroupList from "@/components/TodoGroupList.vue";
import {Todo} from "../../types";
import {factory} from "./utils";
import TodoGroupListItem from "@/components/TodoGroupListItem.vue";

describe('TodoGroupListItem', function () {
  it('should render empty state', function () {
    const wrapper = factory(TodoGroupList, {
      todos: []
    });
    const info = wrapper.find('p');
    expect(info.text()).toContain('Has Empty Todo Item')
  });
  it('should order list item on date', function () {
    const todos: Todo[] = [
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

    const wrapper = factory(TodoGroupList, {
      todos
    });

    const listWrapArray = wrapper.findAllComponents(TodoGroupListItem);

    expect(listWrapArray.at(0).text()).toContain('bar');
    expect(listWrapArray.at(1).text()).toContain('foo');
  });
});
