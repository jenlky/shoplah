import React from 'react';

const DropdownCartItem = ({ product }) => (
  <div className='cart-item'> 
    <img src={product.image} alt={product.name} />
    <div className='cart-item-details'>
      <div className='cart-item-top-row v-center'>
        <span>{product.name}</span>
        <span>{'$' + product.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) }</span>
      </div>
      <div className='cart-item-btm-row v-center'>
        <button type='button' className='cart-item-delete btn'>Delete</button>
      </div>
    </div>
  </div>
);

export default DropdownCartItem;