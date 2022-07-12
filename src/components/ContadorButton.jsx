import React, { memo } from "react";
import StyledButton from "./StyledButton";

const ContadorButton = ({ increment }) => {
  return <StyledButton onClick={increment}>Increment</StyledButton>;
};

export default memo(ContadorButton);
