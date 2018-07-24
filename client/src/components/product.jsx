import React from 'react';
import ProductInfo from './product_info';

const Product = (props) => {
  return (
    <div className='product'>
      <img src={props.product.image} alt={props.product.name} className='img'></img>
      <ProductInfo product={props.product} number={props.number} 
        addCart={props.addCart} totalPrice={props.totalPrice} />
    </div>
  );
}

export default Product;