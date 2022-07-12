import React from "react";
import styled from "styled-components";

export const SButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background-color: #71ce71;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: #599e59;
  }
`;

// const StyledButton = ({ children }) => <SButton>{children}</SButton>;

export default React.memo(SButton);
