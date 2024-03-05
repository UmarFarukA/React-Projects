import React, { createContext, useContext, useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const ModalContext = createContext();

function Modal({ children }) {
  const [name, setName] = useState("");

  const close = () => setName("");

  const open = setName;

  return (
    <ModalContext.Provider value={{ name, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, modalToOpen }) {
  const { open } = useContext(ModalContext);

  return <span onClick={() => open(modalToOpen)}>{children}</span>;
}

function Window({ children, windowName, className }) {
  const { name, close } = useContext(ModalContext);
  if (windowName !== name) return null;

  return (
    <div className={className}>
      <MdOutlineClose
        className="hover:bg-indigo-600 hover:rounded-full hover:p-2 hover:text-stone-100 font-bold hover:fill-slate-50 absolute top-4 right-6"
        onClick={close}
      />
      {children}
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
// "backdrop-sepia-0 bg-gray-50/60 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
