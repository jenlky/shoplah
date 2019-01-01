import React, { Component } from 'react';
import Product from './product';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

const styles = {
  grow: {
    flexGrow: 1
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

const ShoppingCart = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 48 48">
      <path d="M14 36c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4zM2 4v4h4l7.19 15.17-2.7 4.9c-.31.58-.49 1.23-.49 1.93 0 2.21 1.79 4 4 4h24v-4H14.85c-.28 0-.5-.22-.5-.5 0-.09.02-.17.06-.24L16.2 26h14.9c1.5 0 2.81-.83 3.5-2.06l7.15-12.98c.16-.28.25-.61.25-.96 0-1.11-.9-2-2-2H10.43l-1.9-4H2zm32 32c-2.21 0-3.98 1.79-3.98 4s1.77 4 3.98 4 4-1.79 4-4-1.79-4-4-4z"/>
    </svg>
  );
}

// Material UI components cannot be styled with ordinary className, u must follow their method to override it. Probably need use withStyles.
const Logged = (props) => {
  return (
    <Button {...props} href="http://localhost:8080/auth/logout" children='Logout' />
  );
};

class Login extends Component {
  static muiName = 'Button';

  render() {
    return (
      <Button {...this.props} href="http://localhost:8080/auth/login" 
        style={{ fontSize: '14px' }} children='Login' />
    );
  }
}

class Products extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <NavLink style={{ textDecoration: 'none', fontWeight: 'bold', color: 'black', fontSize: '24px' }} 
              to='/' className=''>ShopLah</NavLink>
            <div className='navbar-right-side'>
              <ShoppingCart />
              {this.props.user.isLoggedIn ? <Logged /> : <Login />}
            </div>
          </Toolbar>
        </AppBar>
        <div className='img-container'>
          {this.props.products.map((product, index) => {
            let number = index + 1;
            return (
              <Product product={product} number={number} key={product.name} 
                addToCart={this.props.addToCart} />
            );
          })}
        </div>
      </MuiThemeProvider>
    );
  }
}

// I'm not using styles, theme, Products.propTypes and export default withStyles(styles)(Products);
Products.propTypes = {
  classes: PropTypes.object.isRequired,
}; 

/*
function Products(props) {
  return (
    
  );
} */

/*
const Products = ({products, addToCart}) => {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              ShopLah
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
      <div className='img-container'>
        {products.map((product, index) => {
          let number = index + 1;
          return (
            <Product product={product} number={number} key={product.name} 
              addToCart={addToCart} />
          );
        })}
      </div>
    </React.Fragment>
  );
} */

export default withStyles(styles)(Products);