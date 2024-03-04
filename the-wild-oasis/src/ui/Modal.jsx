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
        className="hover:text-indigo-600 font-bold text-stone-700"
        onClick={close}
      />
      <div>{children}</div>
    </div>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
