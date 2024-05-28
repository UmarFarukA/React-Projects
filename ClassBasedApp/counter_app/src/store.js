import { createStore } from "redux";
import reducer from "./features/counterFeatures";

const store = createStore(reducer);

export default store;
