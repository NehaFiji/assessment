import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Navproduct = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f59d9b' }}>
        <Toolbar>
          <Typography 
            variant="h3" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              textAlign: 'center', 
              fontFamily: 'Lobster, cursive'
            }}
          >
               ⋆.ೃ࿔*:･Product App
          </Typography>
          <Link to={'/'} style={{ textDecoration: 'none' }}>
            <Button 
              sx={{ 
                color: 'white', 
                borderRadius: '20px', 
                marginLeft: 1,
                marginRight: 1
              }}
            >
              Viewproduct
            </Button>
          </Link>
          <Link to={'/add'} style={{ textDecoration: 'none' }}>
            <Button 
              sx={{ 
                color: 'white', 
                borderRadius: '20px', 
                marginLeft: 1,
                marginRight: 1
              }}
            >
              Addproduct
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navproduct;
