import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState, TodoProps} from './app.type';

const initialState: AppState = {
  todos: [],
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoProps>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<TodoProps>) => {
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
