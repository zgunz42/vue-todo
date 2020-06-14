import {MutationTree} from "vuex";
import {BaseNote, MutationTypes, Note, State} from "../../types";

export type Mutations<S = State> = {
  [MutationTypes.INSERT_NOTE](state: State, payload: {note: Note}): void;
}

export const mutations: MutationTree<State> & Mutations = {
  INSERT_NOTE(state, {note}) {
    const base = (note as BaseNote);
    state.data = {
      ...state.data,
      [note.id]: base
    };
    const group  = state[note.group];
    state[note.group] = [...group, note.id];
    state.notes = [...state.notes, note.id]
  }
};
