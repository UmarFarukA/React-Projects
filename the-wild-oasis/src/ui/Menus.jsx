/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { createContext, useContext, useState } from "react";

const MenusContext = createContext();

function Menus({ children }) {
  const [menuName, setMenuName] = useState("");

  const close = () => setMenuName("");

  const open = setMenuName;

  return (
    // <div className="flex justify-end px-4 pt-4">
    //   <button
    //     id="dropdownButton"
    //     data-dropdown-toggle="dropdown"
    //     className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
    //     type="button"
    //   >
    //     <span className="sr-only">Open dropdown</span>
    //     <svg
    //       className="w-5 h-5"
    //       aria-hidden="true"
    //       xmlns="http://www.w3.org/2000/svg"
    //       fill="currentColor"
    //       viewBox="0 0 16 3"
    //     >
    //       <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
    //     </svg>
    //   </button>

    //   <div
    //     id="dropdown"
    //     className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
    //   >
    //     <ul className="py-2" aria-labelledby="dropdownButton">
    //       <li>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //         >
    //           Edit
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //         >
    //           Export Data
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#"
    //           className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
    //         >
    //           Delete
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <MenusContext.Provider value={{ menuName, close, open }}>
      {children}
    </MenusContext.Provider>
  );
}

function Icon({ children, name }) {
  const { open } = useContext(MenusContext);

  return <span onClick={() => open(name)}>{children}</span>;
}

function MenuWindow({ children, name }) {
  const { menuName } = useContext(MenusContext);

  if (menuName !== name) return null;
  return <div className="flex justify-end px-4 pt-4">{children}</div>;
}

Menus.Icon = Icon;
Menus.MenuWindow = MenuWindow;

export default Menus;
