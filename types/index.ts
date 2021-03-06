export type Group = "todo" | "doing" | "done"

export interface BaseNote {
  id: number;
  message: string;
  createAt: Date;
}

export interface Note extends BaseNote{
  group: Group;
}

export type State = {
  data: {
    [key: number]: BaseNote
  },
  todo: number[],
  doing: number[],
  done: number[]
  notes: number[]
}


export type Getters = {
  getNoteGroup(state: State): (group: Group) => Note[]
}

export enum ActionTypes {
   ADD_NOTE = "ADD_NOTE",
   FAST_ADD_NOTE = "FAST_ADD_NOTE",
   MOVE_TO_GROUP = "MOVE_TO_GROUP",
}

export enum MutationTypes {
  INSERT_NOTE = "INSERT_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE"
}
