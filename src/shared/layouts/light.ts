import { createTheme } from '@mui/material';
import { cyan, red } from '@mui/material/colors';

export const LigthTheme = createTheme({
  palette:{
    primary:{
      main: red[700],
      dark: red[800],
      light: red[500] ,
      contrastText: '#020202',
    },
    secondary:{
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300] ,
      contrastText: '#020202',
    },
    background:{
      default: '#f7f6f3',
      paper:  '#ffffff',
    }
  }
});