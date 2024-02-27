import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      className="transition ease-in-out delay-150 duration-300 bg-indigo-600 hover:bg-indigo-700 text-stone-100 px-3 py-2 rounded-md w-full"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
