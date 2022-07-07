import React, { useState, createContext } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState("light");
  const [appLanguage, setAppLanguage] = useState("es");

  const toggleColor = () =>
    setColorMode((prevMode) => (prevMode === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider
      value={{ colorMode, toggleColor, appLanguage, setAppLanguage }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
