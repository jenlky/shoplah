import React from 'react';
import DropdownCartItem from './DropdownCartItem';

// Work on two things: 
// First is the look, second is how can I pass down products added to cart from state to props
const DropdownCart = ({ products, qty }) => {
  console.log(products);

  return (
    <div className='dropdown-cart__menu'>
      <div className='dropdown-cart-header v-center'>recently added products</div>
      {products.map(product => {
        return <DropdownCartItem 
          key={product.name} 
          product={product} 
        />
      })}
      <div className='dropdown-cart-btn'>
        <button type='button' className='btn'>View My Shopping Cart</button>
      </div>
    </div>
  );
}

export default DropdownCart;