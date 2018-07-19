import React from 'react';
import ShoppingCartItems from './shopping_cart_items';

const ShoppingCart = (props) => {

  // change 3
  return (
    <div className='shopping-cart'>
      <div className='horizontal-ruler'></div>
      <div className='shopping-cart-menu'>
        <h3>SHOPPING CART - 3 items</h3>
        <div className='shopping-cart-header'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <ShoppingCartItems num={props.num} item={props.item} qty={props.qty} /> 
      </div>
    </div>
  );
}

export default ShoppingCart;