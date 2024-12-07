import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodoProps} from './app.type';

interface AppState {
  todos: TodoProps[];
}

const initialState: AppState = {
  todos: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addTodo: (state: AppState, action: PayloadAction<TodoProps>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state: AppState, action: PayloadAction<string>) => {
      state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state: AppState, action: PayloadAction<TodoProps>) => {
      const index = state.todos.findIndex(
        todo => todo.id === action.payload.id,
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const {addTodo, removeTodo, editTodo} = appSlice.actions;

export default appSlice.reducer;
