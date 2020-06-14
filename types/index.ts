export type Group = "todo" | "doing" | "done"

export interface Note {
  id: number;
  message: string;
  createAt: Date;
  group: Group;
}
