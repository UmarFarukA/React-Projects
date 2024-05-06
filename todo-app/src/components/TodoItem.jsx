/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteTodo, completedTodo } from "../features/todosSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const { id, title, isDone } = todo;
  console.log(todo);

  const handleDelete = (id) => {
    dispatch(deleteTodo({ id: id }));
  };

  const handleComplete = (id) => {
    dispatch(completedTodo({ id: id }));
  };

  return (
    <li className="flex items-center justify-between bg-gray-100 p-3 mb-2">
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={isDone}
          onChange={() => handleComplete(id)}
        />
        <p
          className={isDone ? "text-stone-700 line-through" : "text-stone-700"}
        >
          {title}
        </p>
      </div>
      <button
        onClick={() => handleDelete(id)}
        className="px-3 py-1 text-slate-100 bg-red-600 rounded-md"
      >
        Delete
      </button>
    </li>
  );
}

export default TodoItem;
