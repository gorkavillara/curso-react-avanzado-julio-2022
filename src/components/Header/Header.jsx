import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/AppContextProvider";
import { IoSunny, IoMoon } from "react-icons/io5";
import { HeaderDiv, ToggleButton } from "../Header";
import { StoreContext } from "../../contexts/StoreContextProvider";

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
`;

const Header = () => {
  const { colorMode, toggleColor } = useContext(AppContext);
  const { cart } = useContext(StoreContext);

  return (
    <HeaderDiv colorMode={colorMode}>
      <span>Logo</span>
      <FlexDiv>
        <span>Artículos en el carrito: {cart.products.length}</span>
        <ToggleButton colorMode={colorMode} onClick={toggleColor}>
          <span className="circle">
            {colorMode === "light" ? <IoSunny /> : <IoMoon />}
          </span>
        </ToggleButton>
      </FlexDiv>
    </HeaderDiv>
  );
};

export default Header;
