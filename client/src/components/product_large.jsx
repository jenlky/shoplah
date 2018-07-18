import React from 'react';
import ProductInfo from './product_info';

const ProductLarge = (props) => {
  
  return (
    <div className='product'>
      <img src={props.product.image} alt={props.product.name} className='img'></img>
      <ProductInfo product={props.product} number={props.number} />
    </div>
  );
}

export default ProductLarge;