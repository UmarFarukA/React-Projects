import React from "react";

export default function Button({ children, onClick, type }) {
  if (type) {
    return (
      <button
        onClick={onClick}
        className="underline text-lg text-stone-600 hover:text-stone-700"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-green-400 text-stone-100 px-3 py-5 text-center"
    >
      {children}
    </button>
  );
}
