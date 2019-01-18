import React from 'react';
import ShoppingCartItems from './shopping_cart_items';
import ShoppingCartTotal from './shopping_cart_total';

const ShoppingCart = (props) => {
  return (
    <div className='shoplah'>
      <div className='horizontal-ruler'></div>
      <div className='shoplah-menu'>
        <h3>SHOPPING CART - {props.qty.length !== 0 ? 
          props.qty.reduce((acc, currentVal) => acc + currentVal): '0'} items</h3>
        <div className='shoplah-header'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        {props.num.map(num => {
          let index = props.num.indexOf(num);
          return <ShoppingCartItems num={props.num[index]} item={props.cartItem[index]} qty={props.qty[index]} 
            key={props.cartItem[index].name} removeFromCart={props.removeFromCart} inputQuantity={props.inputQuantity} 
            handleClick={props.handleClick} />;
        })}
        <ShoppingCartTotal totalPrice={props.totalPrice} />
      </div>
    </div>
  );
}

export default ShoppingCart;