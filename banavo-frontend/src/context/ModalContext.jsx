import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [currentModal, setCurrentModal] = useState(null); // `null` means no modal is open

  const openSignupModal = () => setCurrentModal("signup");
  const openLoginModal = () => setCurrentModal("login");
  const closeModal = () => setCurrentModal(null);

  return (
    <ModalContext.Provider
      value={{ currentModal, openSignupModal, openLoginModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
