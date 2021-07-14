import React from "react";
import Theme from "./styleAssets/Theme";
import { ThemeStore } from "./contexts/ThemeStore";
import { Container } from "./components";

const App = () => {
  return (
    <ThemeStore>
      <Theme>
        <Container>
          <div>Hello</div>
        </Container>
      </Theme>
    </ThemeStore>
  );
};

export default App;
