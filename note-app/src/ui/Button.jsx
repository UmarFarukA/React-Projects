import React from "react";

export default function Button({ children, onClick, type }) {
  const base =
    " text-stone-50  transition hover:ease-in-out hover:delay-150 rounded-md text-center px-3 py-1 sm:px-4 sm:py-2";

  const styles = {
    primary:
      base +
      " bg-green-400 focus:outline-none focu:ring-green-300  hover:bg-green-500",
    reset:
      base +
      " bg-gray-400 focus:outline-none focus:ring-gray-200 hover:bg-gray-500",
  };

  // if (type) {
  //   return (
  //     <button
  //       onClick={onClick}
  //       className="underline text-lg text-stone-600 hover:text-stone-700"
  //     >
  //       {children}
  //     </button>
  //   );
  // }

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}
