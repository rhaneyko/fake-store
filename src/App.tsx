import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
