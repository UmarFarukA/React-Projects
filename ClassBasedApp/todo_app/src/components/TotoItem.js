import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

class TodoItem extends React.Component {
  render() {
    const { id, title } = this.props.todo;
    return (
      <li key={id} className="todo__item">
        <p>{title}</p>
        <div className="todo__item-buttons">
          <MdEdit />
          <MdDelete onClick={() => this.props.remove(id)} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
