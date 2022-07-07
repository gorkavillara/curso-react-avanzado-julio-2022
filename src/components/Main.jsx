import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContextProvider";
import CounterContextProvider from "../contexts/CounterContextProvider";
import Contador from "./Contador";

const Main = () => {
  const { colorMode, appLanguage } = useContext(AppContext);
  const MainDiv = styled.div`
    padding: 1rem;
    background-color: ${colorMode === "light" ? "white" : "#2b2b2b"};
    border-top: ${colorMode === "light" ? "none" : "solid 1px #e5e5e522"};
    color: ${colorMode === "light" ? "#2b2b2b" : "#e5e5e5"};
  `;
  console.log("Main renderizado");
  return (
    <MainDiv>
      {appLanguage === "es" && <h3>Este es el componente principal</h3>}
      {appLanguage === "en" && <h3>This is the main component</h3>}
      <CounterContextProvider>
        <Contador />
      </CounterContextProvider>
    </MainDiv>
  );
};

export default Main;
