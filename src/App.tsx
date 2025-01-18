import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme/theme';

import RoutesApp from './routes';
import { CategoryProvider } from './context/CategoryContext';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
      <RoutesApp/>
      </CategoryProvider>
    </ThemeProvider>
  );
}

export default App;
