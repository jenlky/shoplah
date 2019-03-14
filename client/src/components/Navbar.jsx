import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import CartLogoContainer from '../containers/CartLogoContainer';

const Logout = ({ purgeStore }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <Button 
        href="http://localhost:8080/auth/logout" style={{ fontSize: '14px' }} 
        children='Logout' onClick={purgeStore} 
      />
    );
  }

  return (
    <Button 
      href="/auth/logout" style={{ fontSize: '14px' }} 
      children='Logout' onClick={purgeStore} 
    />
  );
};

class Login extends Component {
  static muiName = 'Button';

  render() {
    if (process.env.NODE_ENV === 'development') {
      return (
        <Button 
          href="http://localhost:8080/auth/login" style={{ fontSize: '14px' }} 
          children='Login'
        />
      );
    }

    return (
      <Button 
        href="/auth/login" style={{ fontSize: '14px' }} 
        children='Login' 
      />
    );
  }
}

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

const styles = {
  toolbar: {
    justifyContent: 'space-between',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '3rem',
      paddingRight: '3rem'
    }
  }
};

// changing of Toolbar classes only work in class component
class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar classes={{ root: classes.toolbar }}>
            <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black', fontSize: '24px' }} 
              to='/'>ShopLah</NavLink>
            <div className='navbar-right-side'>
              <CartLogoContainer />
              {this.props.isLoggedIn ? <Logout purgeStore={this.props.purgeStore} /> : <Login />}
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Navbar);
