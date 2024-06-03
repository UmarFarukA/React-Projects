import uuid from "react-uuid";

const initialState = {
  todos: [
    {
      id: 1,
      title: "Learn React",
      isEditing: false,
    },

    {
      id: 2,
      title: "Design UIs",
      isEditing: false,
    },

    {
      id: 3,
      title: "Deploy React App",
      isEditing: false,
    },
  ],
};

const CREATE = "CREATE";
const READ = "READ";
// const EDIT = "EDIT";
const UPDATE = "UPDATE";
const DELETE = "DELETE";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return {
        todos: [...state.todos, { id: uuid(), title: action.payload }],
      };

    case READ:
      return { ...state };

    case UPDATE:
      return {
        todos: [
          ...state.todos.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                title: action.payload.title,
              };
            }
            return todo;
          }),
        ],
      };

    case DELETE:
      return {
        todos: [...state.todos.filter((todo) => todo.id !== action.payload.id)],
      };
    default:
      return state;
  }
};

export function create(title) {
  return {
    type: CREATE,
    payload: title,
  };
}

export function read() {
  return {
    type: READ,
  };
}

// export function edit(id) {
//   return {
//     type: EDIT,
//     payload: {
//       id,
//     },
//   };
// }

export function update(todo) {
  return {
    type: UPDATE,
    payload: {
      id: todo.id,
      title: todo.title,
    },
  };
}

export function remove(id) {
  return {
    type: DELETE,
    payload: {
      id: id,
    },
  };
}

export default reducer;
