import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";
import GameUI from "./components/GameUI";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Courier New', Courier, monospace;
    background-color: #edf0f2;
    color: #626569;
    text-align: center;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
`;

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Container>
        <h1>Card game</h1>
        <GameUI />
      </Container>
    </>
  );
}

export default App;
