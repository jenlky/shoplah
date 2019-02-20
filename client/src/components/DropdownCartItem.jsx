import React from 'react';

const DropdownCartItem = ({ product, id, qty, removeFromCart }) => {
  const price = '$' + product.price.toLocaleString('en-US', { minimumFractionDigits: 2 });
  // console.log('price:', product.price + ',  qty:', qty);

  const Delete = () => {
    removeFromCart(id);
  }

  return (
    <div className='cart-item'> 
      <img src={product.image} alt={product.name} />
      <div className='cart-item-details'>
        <div className='cart-item-top-row v-center'>
          <span>{product.name}</span>
          {/* move x and qty to a span/div of their own to change the css */}
          <span>{qty > 1 ? (price + ' x ' + qty) : price }</span>
        </div>
        <div className='cart-item-btm-row v-center'>
          <button type='button' className='cart-item-delete btn' onClick={Delete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DropdownCartItem;