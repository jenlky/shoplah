import React from 'react';
import DropdownCartItem from './DropdownCartItem';

const DropdownCart = ({ products, productsId, productsQty, removeFromCart }) => {
  //console.log('productsQty:', productsQty);

  return (
    <div className='dropdown-cart-menu'>
      <div className='dropdown-cart-header v-center'>recently added products</div>
      {products.map((product, index) => {
        return (
          <DropdownCartItem 
            key={product.name} 
            product={product}
            id={productsId[index]}
            qty={productsQty[index]}
            removeFromCart={removeFromCart} 
          />
        );
      })}
      <div className='dropdown-cart-btn'>
        <button type='button' className='btn'>view my shopping cart</button>
      </div>
    </div>
  );
}

export default DropdownCart;