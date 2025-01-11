import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';
import HomePage from './pages/HomePage';
import Header from './components/header';
import RoutesApp from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RoutesApp/>
    </ThemeProvider>
  );
}

export default App;
