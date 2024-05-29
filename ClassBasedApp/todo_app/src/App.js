import { Provider } from "react-redux";
import store from "./store";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;
