import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContextProvider";

const Footer = () => {
  const { appLanguage, setAppLanguage } = useContext(AppContext);
  return (
    <div>
      <button onClick={() => setAppLanguage("es")}>
        {appLanguage === "es" ? "Español" : "Spanish"}
      </button>
      <button onClick={() => setAppLanguage("en")}>
        {appLanguage === "es" ? "Inglés" : "English"}
      </button>
    </div>
  );
};

export default Footer;
