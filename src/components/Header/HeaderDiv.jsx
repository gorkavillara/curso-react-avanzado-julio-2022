import styled from "styled-components";

export const HeaderDiv = styled.div`
  height: 3rem;
  width: 100vw;
  background-color: ${({ colorMode }) =>
    colorMode === "light" ? "#e5e5e5" : "#2b2b2b"};
  color: ${({ colorMode }) => (colorMode === "light" ? "#2b2b2b" : "#e5e5e5")};
  display: flex;
  box-sizing: border-box;
  padding: 0.25rem 1rem;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
`;
