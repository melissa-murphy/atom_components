import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import  GlobalStyles  from './global_styles/GlobalStyles';
import { lightTheme, darkTheme } from './global_styles/theme';
import Button from "./components/Button";

const App = () => {
  const [theme, setTheme] = useState('light');
  const switchTheme = () =>  theme === 'light' ? setTheme('dark') : setTheme('light');

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Button type="button" onClick={switchTheme}>Switch Theme</Button>
      </>
    </ThemeProvider>
  );
};

export default App;
