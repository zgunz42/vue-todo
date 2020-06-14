import { Getters } from "../../types";

export const getters: Getters = {
  getNoteGroup: (state) => (group) => {
    return state[group].map(value => {
      const base = state.data[value];
      return {
        ...base,
        group
      }
    })
  }
};
