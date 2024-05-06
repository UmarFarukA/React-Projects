// import React from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Todo from "./components/Todo";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
}

export default App;
