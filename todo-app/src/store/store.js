import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../features/todosSlice";

const store = configureStore({
  reducer: todosSlice,
});

export default store;
