import React from "react";
import Theme from "./styleAssets/Theme";
import { ThemeStore } from "./contexts/ThemeStore";
import { Container, Column, Row } from "./components";

const App = () => {
  return (
    <ThemeStore>
      <Theme>
        <Container>
          <h1>Themed Components</h1>
          <Row>
            <p>This </p>
            <p>is </p>
            <p>a </p>
            <p>row</p>
            <Column>
              <p>This</p>
              <p>is</p>
              <p>a</p>
              <p>column</p>
            </Column>
          </Row>
        </Container>
      </Theme>
    </ThemeStore>
  );
};

export default App;
