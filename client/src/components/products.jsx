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
        style={{ fontSize: '14px', position: 'absolute', right: '6px' }} children='Login' />
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
              className='' to='/' className={this.props.grow}>ShopLah</NavLink>

            {this.props.user.isLoggedIn ? <Logged /> : <Login />}
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

// I'm not using Products.propTypes and export default withStyles(styles)(Products);
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