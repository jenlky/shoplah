import React from 'react';
import Product from './product';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// #ffcd38 considering, tool recommend #ffe9b4
// #F4F3ED bg
// #EFB784 btn color

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

//<Button color="inherit" onClick={props.redirect}>Login</Button>

function Products(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <AppBar>
          <Toolbar>
            <Typography variant="h4" color="inherit" className={classes.grow}>
              ShopLah
            </Typography>
            <a href="http://localhost:8080/auth/login">Login</a>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
      <div className='img-container'>
        {props.products.map((product, index) => {
          let number = index + 1;
          return (
            <Product product={product} number={number} key={product.name} 
              addToCart={props.addToCart} />
          );
        })}
      </div>
    </React.Fragment>
  );
}

Products.propTypes = {
  classes: PropTypes.object.isRequired,
};

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