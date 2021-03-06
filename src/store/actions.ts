import {ActionTypes, Group, MutationTypes, Note, State} from "../../types";
import {ActionContext} from "vuex";

export const actions = {
  [ActionTypes.ADD_NOTE]({commit}: ActionContext<State, any>, note: Note) {
    commit(MutationTypes.INSERT_NOTE, {note})
  },

  [ActionTypes.FAST_ADD_NOTE]({dispatch, state}: ActionContext<State, any>, message: string) {
      const note: Note = {
        id: state.notes.length + 1,
        group: "todo",
        createAt: new Date(),
        message,
      };

      dispatch(ActionTypes.ADD_NOTE, note)
  },

  [ActionTypes.MOVE_TO_GROUP]({commit}: ActionContext<State, any>, {note, group}: {note: Note, group: Group}) {
    commit(MutationTypes.UPDATE_NOTE, {note, group})
  }
};
