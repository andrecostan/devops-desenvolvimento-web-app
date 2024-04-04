import { Button } from '@mui/material';
import { Routes, Route, Navigate } from 'react-router-dom';

import { useAppThemeContext, useDrawerContext } from '../shared/contexts';
import { useEffect } from 'react';
import { Dashboard } from '../pages';

export const AppRoutes = () => {
  const { toggleDrawerOpen,setDrawerOptions } = useDrawerContext();
  const { toggleTheme } = useAppThemeContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        to: '/pagina-inicial',
        label: 'Página inicial',
      },
      {
        icon: 'star',
        to: '/dividas',
        label: 'Dividas',
      }
    ]);
  },[]);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard/>} />
      {/* <Route path="/pagina-inicial" element={<Button variant='contained' color='primary' onClick={toggleTheme} content='marginLeft'>Toggle Theme</Button>} /> */}

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  );
};