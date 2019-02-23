import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import CartLogoContainer from '../containers/CartLogoContainer';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary:{
      main: '#ffe9b4'
    } 
  }
});

// Material UI components cannot be styled with ordinary className, u must follow their method to override it. Probably need use withStyles.
const Logged = ({ purgeStore }) => {
  // change the logout btn to a dropdown menu with my username

  return (
    <Button href="http://localhost:8080/auth/logout" style={{ fontSize: '14px' }} 
      children='Logout' onClick={purgeStore} 
    />
  );
};

class Login extends Component {
  static muiName = 'Button';

  render() {
    return (
      <Button href="http://localhost:8080/auth/login" style={{ fontSize: '14px' }} 
        children='Login' 
      />
    );
  }
}

const Navbar = ({ isLoggedIn, purgeStore }) => {
  // console.log('isLoggedIn', isLoggedIn);
  // console.log('numOfItems', numOfItems);

  return (
    <MuiThemeProvider theme={theme}>
      <AppBar>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black', fontSize: '24px' }} 
            to='/' className=''>ShopLah</NavLink>
          <div className='navbar-right-side'>
            <CartLogoContainer />
            {isLoggedIn ? <Logged purgeStore={purgeStore} /> : <Login />}
          </div>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
};

export default Navbar;