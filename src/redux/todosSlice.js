// src/todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload });
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    setTodos: (state, action) => {
      return action.payload;
    },
  },
});

export const { addTodo, removeTodo, setTodos } = todosSlice.actions;
export default todosSlice.reducer;
