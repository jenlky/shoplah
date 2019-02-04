import React, {} from 'react';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import PropTypes from 'prop-types';

const Cart = ({ num, cartItem, qty, removeFromCart, inputQuantity, handleClick }) => {
  if (!num || !qty) {
    return null;
  } 

  return (
    <div className='shoplah'>
      <div className='horizontal-ruler'></div>
      <div className='shoplah-menu'>
        <h3>SHOPPING CART - {qty.length !== 0 ? 
          qty.reduce((acc, currentVal) => acc + currentVal) : '0'} items</h3>
        <div className='shoplah-header'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        {num.map(num => {
          // let index = num.indexOf(num);
          let index = num - 1;
          return <CartItems num={num[index]} cartItem={cartItem[index]} qty={qty[index]} 
            key={cartItem[index].name} removeFromCart={removeFromCart}
            inputQuantity={inputQuantity} handleClick={handleClick} />
        })}
        <CartTotal />
      </div>
    </div>
  );
};

/*
Cart.propTypes = {
  num: PropTypes.array.isRequired,
  cartItem: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  qty: PropTypes.array.isRequired,
  totalPrice: PropTypes.number.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  inputQuantity: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}; */

export default Cart;