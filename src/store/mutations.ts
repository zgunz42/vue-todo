import { MutationTree } from "vuex";
import { BaseNote, Group, MutationTypes, Note, State } from "../../types";

export type Mutations<S = State> = {
  [MutationTypes.INSERT_NOTE](state: State, payload: {note: Note}): void;
  [MutationTypes.UPDATE_NOTE](state: State, payload: {note: Note, group: Group}): void;
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
  },
  UPDATE_NOTE(state, {note, group}) {
    console.log(note, group);
    const targetGroup = state[group];
    state[note.group] = state[note.group].filter(value => value !== note.id);
    state[group] = [...targetGroup, note.id]
  }
};
