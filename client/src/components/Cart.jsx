import React from 'react';
import CartItem from './CartItem';
import CartTotalContainer from '../containers/CartTotalContainer';
import PropTypes from 'prop-types';

const Cart = ({ productsId, qty, products, removeFromCart, inputQuantity, handleClick }) => {
  if (!productsId || !qty) {
    return null;
  } 
  
  /*
  console.log('Cart - productsId:', productsId);
  console.log('Cart - qty:', qty);
  console.log('Cart - products:', products); */

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
        {productsId.map((id, index) => {
          let productIndex = id - 1;
          return (
            <CartItem
              key={products[productIndex].name} 
              id={id} 
              product={products[productIndex]} 
              qty={qty[index]} 
              removeFromCart={removeFromCart}
              inputQuantity={inputQuantity}
              handleClick={handleClick}
            />
          );
        })}
        <CartTotalContainer />
      </div>
    </div>
  );
};

Cart.propTypes = {
  productsId: PropTypes.array.isRequired,
  qty: PropTypes.array.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
  inputQuantity: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}; 

export default Cart;