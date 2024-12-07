export type AppState = {
  todos: TodoProps[];
};

export enum TodoPriority {
  high = 'high',
  medium = 'medium',
  low = 'low',
}

export type TodoProps = {
  id: string;
  name: string;
  deadline: Date;
  priority: TodoPriority;
  isDone: boolean;
};
