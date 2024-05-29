import React from "react";
import TodoList from "./TodoList";
import { create, remove } from "../features/todoSlice";
import { connect } from "react-redux";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
    this.handleChange = this.handleChange.bind(this);
    // this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value,
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
            onClick={() => this.props.create(this.state.title)}
          >
            Add
          </button>
        </div>
        <TodoList todos={this.props.todos} remove={this.props.remove} />
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
