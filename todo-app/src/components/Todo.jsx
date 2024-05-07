// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../features/todosSlice";
import TodoList from "./TodoList";
import { useState } from "react";
import uuid from "react-uuid";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (title === "") return;

    dispatch(createTodo({ id: uuid(), title: title, isDone: false }));
    setTitle("");
  };

  return (
    <div className="flex flex-col items-center gap-3 space-y-5 mt-8">
      <h3 className="text-stone-700 text-xl font-semibold">Todo App</h3>
      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Enter todo title"
          className="px-2 py-3 bg-gray-300 rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="px-3 py-1 bg-stone-700 text-slate-50 rounded-md"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      {todos.length > 0 ? (
        <TodoList todos={todos} />
      ) : (
        <p className="text-stone-700">Your Todo list is empty</p>
      )}
    </div>
  );
}

export default Todo;
