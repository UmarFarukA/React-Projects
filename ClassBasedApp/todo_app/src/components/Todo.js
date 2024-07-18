 import React from "react";
import TodoList from "./TodoList";
import { create, remove, update } from "../features/todoSlice";
import { connect } from "react-redux";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      isEditing: false,
      editTodo: [],
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleEdit = this.handleEdit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleEdit = (id) => {
    const [editTodo] = this.props.todos.filter((todo) => todo.id === id);
    console.log(editTodo.id, editTodo.title);
    this.setState({
      editTodo: editTodo,
      title: editTodo.title,
      isEditing: true,
    });
  };

  render() {
    return (
      <div className="todo">
        <h2>Todo App</h2>
        <div className="todo__top">
          <input
            type="text"
            value={this.state.title}
            placeholder="Enter todo title"
            onChange={(e) => this.handleChange(e)}
          />
          <button
            type="button"
            onClick={
              this.state.isEditing
                ? () => this.props.update(this.state.editTodo.id)
                : () => this.props.create(this.state.title)
            }
          >
            {this.state.isEditing ? "Update" : "Add"}
          </button>
        </div>
        <TodoList
          todos={this.props.todos}
          remove={this.props.remove}
          edit={this.handleEdit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    create: (title) => dispatch(create(title)),
    remove: (id) => dispatch(remove(id)),
    update: (id) => dispatch(update(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
