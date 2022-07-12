import React from "react";
import StyledButton from "./StyledButton";

const ContadorComponent = ({ contador, increment }) => {
  return <StyledButton onClick={increment}>Valor: {contador}</StyledButton>;
};

export default ContadorComponent;
