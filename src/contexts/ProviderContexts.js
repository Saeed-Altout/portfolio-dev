import React, { createContext, useContext, useState } from "react";
export const StateContext = createContext();
export const ProviderContexts = ({ children }) => {
  const [currentMode, setCurrentMode] = useState("light");
  const [isClickedMode, setIsClickedMode] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const setMode = (e) => {
    if (e) {
      localStorage.setItem("mode", "light");
      localStorage.setItem("icon", "moon");
    } else {
      localStorage.setItem("mode", "dark");
      localStorage.setItem("icon", "sun");
    }
  };
  const updatePosition = () => {
    setScrollPosition(window.pageYOffset);
  };
  return (
    <StateContext.Provider
      value={{
        currentMode,
        setCurrentMode,
        setMode,
        activeMenu,
        setActiveMenu,
        isClickedMode,
        setIsClickedMode,
        scrollPosition,
        setScrollPosition,
        updatePosition,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
