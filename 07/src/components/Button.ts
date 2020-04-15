import styled from "styled-components";

export default styled.button`
  background-color: grey;
  padding: 10px 20px;
  border-radius: 4px;
  border: solid black 1px;
  cursor: pointer;
  margin: 5px;
  pointer-events: ${({ disabled }): string => (disabled ? "none" : "all")};
  color: ${({ disabled }): string => (disabled ? "darkgrey" : "black")};
`;
