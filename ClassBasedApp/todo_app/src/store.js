import { createStore } from "redux";
import reducer from "./features/todoSlice";

const store = createStore(reducer);

export default store;
