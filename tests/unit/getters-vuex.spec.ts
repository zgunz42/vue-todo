import {getters} from "@/store/getters";
import {State} from "../../types";

describe('getters-vuex', function () {
  it('should get note by group', function () {
    const state: State = {
      data: {
        1: {
          id: 1,
          message: 'bar',
          createAt: new Date()
        },
        2: {
          id: 2,
          message: 'bar',
          createAt: new Date()
        }
      },
      doing: [],
      done: [],
      todo: [1],
      notes: [1]
    };

    let todoGroup = getters.getNoteGroup(state)("todo");

    expect(todoGroup).toHaveLength(1);
    expect(todoGroup.pop()).toHaveProperty("id", 1)
  });
});
