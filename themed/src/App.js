import React from "react";
import Theme from "./styleAssets/Theme";
import { ThemeStore } from "./contexts/ThemeStore";
import { Container, Column, Row, Button } from "./components";

const App = () => {
  return (
    <ThemeStore>
      <Theme>
        <Container>
          <h1>Themed Components</h1>
        </Container>
        <Container>
          <Row>
            <h2>Row Component</h2>
          </Row>
          <Column width={"25%"}>
            <h2>Column Component</h2>
            <div>
              <p>
                Tincidunt augue interdum velit euismod in pellentesque massa
                placerat. Amet consectetur adipiscing elit pellentesque habitant
                morbi. Interdum varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Morbi tincidunt ornare massa eget egestas.
                Est sit amet facilisis magna etiam tempor orci eu lobortis.
                Facilisi nullam vehicula ipsum a arcu cursus vitae.
              </p>
            </div>
            <div>
              <p>
                Natoque penatibus et magnis dis parturient montes nascetur.
                Varius duis at consectetur lorem. Nunc eget lorem dolor sed
                viverra. Adipiscing vitae proin sagittis nisl rhoncus mattis.
                Quis commodo odio aenean sed adipiscing.
              </p>
            </div>
          </Column>
          <Column width={"50%"}>
            <h2>Column Component</h2>
            <div>
              <p>
                Tincidunt augue interdum velit euismod in pellentesque massa
                placerat. Amet consectetur adipiscing elit pellentesque habitant
                morbi. Interdum varius sit amet mattis vulputate enim nulla
                aliquet porttitor. Morbi tincidunt ornare massa eget egestas.
                Est sit amet facilisis magna etiam tempor orci eu lobortis.
                Facilisi nullam vehicula ipsum a arcu cursus vitae.
              </p>
            </div>
            <div>
              <p>
                Natoque penatibus et magnis dis parturient montes nascetur.
                Varius duis at consectetur lorem. Nunc eget lorem dolor sed
                viverra. Adipiscing vitae proin sagittis nisl rhoncus mattis.
                Quis commodo odio aenean sed adipiscing.
              </p>
            </div>
          </Column>
        </Container>
        <Container>
          <h2>Buttons</h2>
          <Row>
            <Button info>Button</Button>
          </Row>
        </Container>
      </Theme>
    </ThemeStore>
  );
};

export default App;
