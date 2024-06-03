import React from "react";
import TodoItem from "./TotoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="todo__list">
        {this.props.todos.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            remove={this.props.remove}
            edit={this.props.edit}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
