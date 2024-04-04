/* eslint-disable linebreak-style */
import { BrowserRouter } from 'react-router-dom';
import AppRoutes  from './routes';
import { ThemeProvider } from '@emotion/react';
import { LigthTheme } from './shared/layouts';
import { MenuLateral } from './shared/components';

function App() {
  return (
    <ThemeProvider theme={LigthTheme}>
      <BrowserRouter>
        <MenuLateral>
          <AppRoutes />
        </MenuLateral>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
