import React from 'react';
import Product from './product';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Products = ({products, addToCart}) => {
  return (
    <React.Fragment>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" color="inherit" >
            Shopping Cart
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
}

export default Products;