import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContextProvider";

const Header = () => {
  const { colorMode, toggleColor } = useContext(AppContext);

  const HeaderDiv = styled.div`
    height: 3rem;
    width: 100vw;
    background-color: ${colorMode === "light" ? "#e5e5e5" : "#2b2b2b"};
    color: ${colorMode === "light" ? "#2b2b2b" : "#e5e5e5"};
    display: flex;
    box-sizing: border-box;
    padding: 0.25rem 1rem;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s;
  `;
  console.log("Header renderizado")
  return (
    <HeaderDiv>
      <span>Logo</span>
      <div>
        <span>Botones</span>
        <button onClick={toggleColor}>Toggle</button>
      </div>
    </HeaderDiv>
  );
};

export default Header;