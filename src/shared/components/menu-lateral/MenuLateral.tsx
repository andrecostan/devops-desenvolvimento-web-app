/* eslint-disable react/prop-types */
/* eslint-disable quotes */
import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

interface IListItemLinkProps{
    to: string;
    icon: string;
    label: string;
    onClick: () => void;
}
const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onClick }) =>{
  
  const navigate = useNavigate();  

  const handleClick = () => {
    navigate(to);
    onClick();
  };
  return(
    <ListItemButton onClick={onClick}>
      <ListItemIcon>
        <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItemButton>
  );
};


interface IMenulateralProps{
    children: React.ReactNode
}
// eslint-disable-next-line react/prop-types
export const MenuLateral: React.FC<IMenulateralProps> = ({ children }) => {
  const theme = useTheme();
  return(
    <>
      <Drawer open={true} variant='permanent'>
        <Box width={theme.spacing(28)} height="100%" display={"flex"} flexDirection={"column"}>
          <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center">
            <Avatar
              sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
              src="https://yt3.ggpht.com/grfYgQadT8iNg9WPb-jkrKB-9224y_DBDXAOtV4Yt7cyQmtR47J_453uveQOTDsp_dRSH851TMM=s108-c-k-c0x00ffffff-no-rj"
            />
          </Box>
          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemButton>
                <ListItemIcon>
                  <Icon>home</Icon>
                </ListItemIcon>
                <ListItemText primary="Página inicial" />
              </ListItemButton>
            </List>
          </Box>
        </Box>
        
      </Drawer>
      <Box height="100vh" marginLeft={theme.spacing(28)}>
        {children}
      </Box>
    </>
  );
};