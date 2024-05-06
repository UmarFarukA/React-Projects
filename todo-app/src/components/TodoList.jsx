/* eslint-disable react/prop-types */

import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <ul className="flex flex-col gap-3 w-1/3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
