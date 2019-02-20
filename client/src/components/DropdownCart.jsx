import React from 'react';
import DropdownCartItem from './DropdownCartItem';

// Work on two things: 
// First is the look, second is how can I pass down qty from state to props
const DropdownCart = ({ products, qty }) => {
  ///console.log(products);

  return (
    <div className='dropdown-cart-menu'>
      <div className='dropdown-cart-header v-center'>recently added products</div>
      {products.map(product => {
        return <DropdownCartItem 
          key={product.name} 
          product={product} 
        />
      })}
      <div className='dropdown-cart-btn'>
        <button type='button' className='btn'>view my shopping cart</button>
      </div>
    </div>
  );
}

export default DropdownCart;