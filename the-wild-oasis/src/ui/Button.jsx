import React from "react";

export default function Button({ children, onClick, type }) {
  const base =
    "transition ease-in-out delay-150 duration-300 bg-indigo-600 hover:bg-indigo-700 text-stone-100 px-3 py-2 rounded-lg outline-none focus:ring focus:ring-indigo-200";
  const styles = {
    normal: base,
    stretch: base + " w-full",
    cancel:
      "transition ease-in-out delay-150 duration-300 bg-indigo-50 hover:bg-stone-400 text-stone-600 font-semibold outline-none focus:ring focus:ring-stone-100 px-5 py-2 rounded-lg",
  };
  if (type === "stretch")
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  if (type === "normal")
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  if (type === "cancel")
    return (
      <button className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
}
