import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from './Logo.png';
import Multitronik from './Multitronik.png';
import "@fontsource/dm-sans/400-italic.css";
import { Divider } from '@mui/material';

const pages = ['HOME', 'ABOUT US', 'SERVICES', 'CONTACT'];

function App() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box sx={{backgroundColor: '#2A2A2B', height:'100vh'}}>
    <AppBar position="static" style={{backgroundColor: '#FFFFFF'}}>
      <Container maxWidth="4500px">

        <Toolbar disableGutters>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} >
            <img src={Logo}/>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <img src={Logo}/>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', color:'red' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 0}}>
          <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="#2A2A2B"
            >
              <MenuIcon />
            </IconButton>
          </Box>
      
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'end' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: '#2A2A2B', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    <Box width={{xs: '80%', md: '40%' }} marginX={3} marginTop={5}>
        <img src={Multitronik} width={'100%'}/>
        <Typography color={'white'} fontFamily={"DM Sans"} fontSize={'30px'}> PROXIMAMENTE</Typography>
        <Divider sx={{backgroundColor:"white"}}/>
      <Typography color={'white'} fontFamily={"DM Sans"}>info@multitronikllc.com</Typography>       
    </Box>
    </Box>
  );
}


export default App;
