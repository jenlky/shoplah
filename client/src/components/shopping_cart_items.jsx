import React from 'react';

const ShoppingCartItems = (props) => {
  let item = props.item;
  let num = props.num;
  let qty = props.qty;

  // if a product was clicked return a row of product, else return null
  if (props.num.length !== 0) {
    return (
      <div className='shopping-cart-items'>
        <div className='shopping-cart-product'>
          <i className='far fa-window-close shopping-cart-cancel'></i>
          <img className='shopping-cart-img' src={item.image} alt={item.name} />
          <span>Product {num}</span>
        </div>
        <span>{item.currency + ' ' + item.price}</span>
        <input className='item-input-qty' readOnly value={qty} type="text"/>
        <span>{item.currency + ' ' + (qty * item.price).toFixed(2)}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCartItems;