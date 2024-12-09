import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState, TodoProps} from './app.type';

const initialState: AppState = {
  todos: [],
  editingId: '',
};

const sortTodos = (a: TodoProps, b: TodoProps) =>
  a.priority.sortNumber - b.priority.sortNumber < 0
    ? -1
    : a.priority.sortNumber - b.priority.sortNumber === 0
    ? 0
    : 1;

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.todos.unshift(action.payload);
      state.todos.sort(sortTodos);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<TodoProps>) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = {...state.todos[index], ...action.payload};
      }
      state.todos.sort(sortTodos);
    },
    setEditId: (state, action: PayloadAction<string>) => {
      state.editingId = action.payload;
    },
  },
});

export const {addTodo, removeTodo, editTodo, setEditId} = appSlice.actions;

export default appSlice.reducer;
