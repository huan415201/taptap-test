export enum TodoPriority {
  high = 'high',
  medium = 'medium',
  low = 'low',
}

export type TodoProps = {
  id: string;
  name: string;
  deadline: string;
  priority: TodoPriority;
  isDone: boolean;
};
