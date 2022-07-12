import React, { useState } from "react";
import styled from "styled-components";
import StyledButton from "./StyledButton";

const Input = styled.input`
  padding: 0.25rem;
  border: solid 1px #bbb;
  border-radius: 0.25rem;
  outline: none;
`;

const UserComponent = ({ setUser }) => {
  const [newUser, setNewUser] = useState({ name: "", lastName: "" });

  const handleSubmit = () => {
    // const newUser = {
    //     // name: name,
    //     name
    // }
    setUser(newUser);
  };
  return (
    <div>
      <Input
        type="text"
        value={newUser.name}
        onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
      />
      <StyledButton onClick={handleSubmit}>Aceptar</StyledButton>
    </div>
  );
};

export default UserComponent;
