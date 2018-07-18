import React from 'react';
import ShoppingCartItems from './shopping_cart_items';

const ShoppingCart = () => {

  // change 3
  return (
    <div className='shopping-cart'>
      <div className='horizontal-line'></div>
      <h2>Shopping Cart - 3 items</h2>
      <div>
        <div className='shopping-cart-menu'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          
        </div>
        <ShoppingCartItems /> 
      </div>
    </div>
  );
}

export default ShoppingCart;