import styled from "styled-components";

export const ToggleButton = styled.button`
  display: flex;
  justify-content: center;
  width: 2rem;
  border-radius: 0.5rem;
  height: 1rem;
  background-color: #a5a5a5;
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  .circle {
    transform: ${({ colorMode }) =>
      colorMode === "light" ? "translateX(-0.4rem)" : "translateX(0.4rem)"};
    width: 0.9rem;
    height: 0.9rem;
    background-color: #666;
    border-radius: 50%;
    color: white;
    box-sizing: border-box;
  }
`;
