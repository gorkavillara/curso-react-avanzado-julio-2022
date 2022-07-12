import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

const Input = styled.input`
  padding: 0.25rem;
  border: solid 1px #bbb;
  border-radius: 0.25rem;
  outline: none;
`;

const BadUserComponent = ({ user, setUser }) => {
  return (
    <div>
      <Input
        type="text"
        value={user.name}
        onChange={(e) => setUser(prevUser => ({ ...prevUser, name:e.target.value }))}
      />
      <StyledButton>Aceptar</StyledButton>
    </div>
  );
};

export default BadUserComponent;
