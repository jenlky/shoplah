import React from 'react';

const ShoppingCartItems = (props) => {
  let item = props.item;
  let num = props.num;
  let qty = props.qty;

  // if a product was clicked return a row of product, else return null
  if (props.num.length !== 0) {
    return (
      <div className='shopping-cart-items'>
        <i className='far fa-window-close shopping-cart-cancel'></i>
        <img src={item.image} alt={item.name} className='' />
        <span className='item-label-product'>Product {num}</span>
        <span className='item-label-price'>{item.currency + ' ' + item.price}</span>
        <input className='item-input-qty' readOnly value={qty} type="text"/>
        <span className='item-label-total'>{item.currency + ' ' + (qty * item.price).toFixed(2)}</span>
      </div>
    );
  } else {
    return null;
  }
}

export default ShoppingCartItems;