export type Group = "todo" | "doing" | "done"

export interface Todo {
  id: number;
  message: string;
  createAt: Date;
  group: Group;
}
