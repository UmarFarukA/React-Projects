import React, { useReducer, useState } from "react";
import NoteItem from "./NoteItem";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Learning the concept of React",
    },

    {
      id: 2,
      title: "Learning Backend with Python",
    },
    {
      id: 3,
      title: "Learn UI/UX with ease",
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "create":
      return {
        ...state,
        notes: [...state.notes, { id: uuidv4(), title: action.payload }],
      };

    case "read":
      return { ...state };

    case "update":
      return {
        ...state,
        notes: state.notes.map((note) => {
          if (note.id === action.note.id) {
            return { ...note, title: action.note.title };
          }
          return note;
        }),
      };

    case "delete":
      return {
        ...state,
        notes: [...state.notes.filter((note) => note.id !== action.payload)],
      };

    default:
      break;
  }
}
function Notes() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [noteToAdd, setNoteToAdd] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [noteId, setNoteId] = useState(null);

  function handleAdd(e) {
    e.preventDefault();
    dispatch({
      type: "create",
      payload: noteToAdd,
    });
    setNoteToAdd("");
  }

  function handleDelete(id) {
    dispatch({
      type: "delete",
      payload: id,
    });
  }

  function handleEdit(id) {
    setIsEditing(true);
    const [noteToEdit] = state.notes.filter((note) => note.id === id);

    setNoteId(noteToEdit.id);
    setNoteToAdd(noteToEdit.title);
  }

  function handleUpdate() {
    dispatch({
      type: "update",
      note: {
        id: noteId,
        title: noteToAdd,
      },
    });
    setIsEditing(false);
    setNoteToAdd("");
  }

  return (
    <div className="flex flex-col item-center  w-2/5 gap-4">
      <div className="flex flex-row justify-center items-center gap-2">
        <input
          type="text"
          value={noteToAdd}
          onChange={(e) => setNoteToAdd(e.target.value)}
          placeholder="Enter note title"
          className="px-2 py-3 rounded-md focus:ring focus:ring-green-600"
        />
        <button
          className="px-3 py-2 bg-green-600 text-slate-50"
          onClick={isEditing ? handleUpdate : handleAdd}
        >
          {isEditing ? "Update" : "Add"}
        </button>
      </div>

      <hr />

      <div className="">
        {state.notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default Notes;
