export type AppState = {
  todos: TodoProps[];
  edittingId: string;
};

export type TodoPriority = {
  id: TodoPriorityKey;
  name: string;
  shortName: string;
  color: string;
  sortNumber: number;
};

export type TodoPriorityKey = 'high' | 'medium' | 'low';

export type TodoProps = {
  id: string;
  name: string;
  deadline: string;
  priority: TodoPriority;
  isDone: boolean;
};
