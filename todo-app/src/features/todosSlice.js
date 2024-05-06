import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    createTodo: (state, action) => {
      state.todos.push(action.payload);
    },

    completedTodo: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo
      );
      return state;
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      return state;
    },
  },
});

export const { createTodo, completedTodo, deleteTodo } = todosSlice.actions;

export default todosSlice.reducer;
