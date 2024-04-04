import { createTheme } from '@mui/material';
import { cyan, red } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette:{
    primary:{
      main: red[700],
      dark: red[800],
      light: red[500] ,
      contrastText: '#ffffff',
    },
    secondary:{
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300] ,
      contrastText: '#ffffff',
    },
    background:{
      default: '#202124',
      paper:  '#303134',
    }
  }
});