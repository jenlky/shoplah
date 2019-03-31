import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import CartLogoContainer from '../containers/CartLogoContainer';
import Login from './Login';
import LogoutMenu from './LogoutMenu';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary:{
      main: '#ffe9b4'
    } 
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '14px',
        textTransform: 'capitalize',
        maxWidth: '11rem',
      }, 
      label: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }
    },
    MuiButtonBase: {
      root: {
        display: 'block',
      }
    },
    MuiAppBar: {
      root: {
        zIndex: '1',
      }
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
  },
};

// changing of Toolbar classes only work in class component
class Navbar extends Component {
  render() {
    //console.log(this.props.username);
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar classes={{ root: classes.toolbar }}>
            <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black', fontSize: '24px' }} 
              exact to='/'>ShopLah</NavLink>
            <div className='navbar-right-side'>
              <CartLogoContainer />
              {this.props.isLoggedIn ? 
                <LogoutMenu 
                  username={this.props.username}
                  purgeStore={this.props.purgeStore} 
                /> 
                  : 
                <Login />
              }
            </div>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Navbar);