import React, { createContext, useContext, useState } from "react";

export const ModalContext = createContext();

function Modal({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen, handleIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Title = Title;
Modal.Content = Content;
Modal.Button = Button;

export default Modal;

function Title({ children }) {
  return <p>{children}</p>;
}

function Content({ children }) {
  return <div>{children}</div>;
}

function Button({ children, className }) {
  const { handleIsOpen } = useContext(ModalContext);
  return (
    <button className={className} onClick={handleIsOpen}>
      {children}
    </button>
  );
}
