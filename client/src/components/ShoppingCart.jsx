import React from 'react';
import ShoppingCartItems from './ShoppingCartItems';
import ShoppingCartTotal from './ShoppingCartTotal';
import PropTypes from 'prop-types';

/*
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
} */

const ShoppingCart = ({ num, cartItem, qty, totalPrice, removeFromCart, inputQuantity, handleClick }) => (
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
        let index = num.indexOf(num);
        return <ShoppingCartItems num={num[index]} item={cartItem[index]} qty={qty[index]} 
          key={cartItem[index].name} removeFromCart={removeFromCart}
          inputQuantity={inputQuantity} handleClick={handleClick} />;
      })}
      <ShoppingCartTotal totalPrice={totalPrice} />
    </div>
  </div>
);

/*
ShoppingCart.propTypes = {
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

export default ShoppingCart;