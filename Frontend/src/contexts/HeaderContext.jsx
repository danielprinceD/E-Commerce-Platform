import React, { createContext, useState, useContext } from "react";
import { useDatabase } from "./DatabaseContext";

const HeaderContext = createContext();

export const useHeader = () => {
  return useContext(HeaderContext);
};

export const HeaderProvider = ({ children }) => {
  const { data } = useDatabase();
  const [isOpen, setIsOpen] = useState(false);
  const [isOffCanvasOpen, setOffCanvasOpen] = useState("");

  const [activeCategory, setActiveCategory] = useState(null);

  const menuHandler = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const offCanvasHandler = () => {
    setOffCanvasOpen((isOffCanvasOpen) => !isOffCanvasOpen);
  };

  return (
    <HeaderContext.Provider
      value={{
        isOpen,
        setIsOpen,
        setOffCanvasOpen,
        menuHandler,
        isOffCanvasOpen,
        offCanvasHandler,
        activeCategory,
        setActiveCategory,
      }}
    >
      {children}
    </HeaderContext.Provider>
  );
};
