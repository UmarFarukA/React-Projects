import React from "react";

function NoteItem({ note, handleEdit, handleDelete }) {
  const { id, title } = note;

  return (
    <div className="flex items-center justify-between mb-3" key={id}>
      <p className="mb-2">{title}</p>
      <div className="flex gap-2">
        <button
          onClick={() => handleEdit(id)}
          className="bg-stone-500 text-slate-50 px-2 py-1"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(id)}
          className="bg-red-500 text-slate-50 px-2 py-1"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
