export type AppState = {
  todos: TodoProps[];
  edittingId: string;
};

export enum TodoPriority {
  high = 'Ưu tiên cao',
  medium = 'Ưu tiên trung bình',
  low = 'Ưu tiên thấp',
}

export type TodoProps = {
  id: string;
  name: string;
  deadline: string;
  priority: TodoPriority;
  isDone: boolean;
};
