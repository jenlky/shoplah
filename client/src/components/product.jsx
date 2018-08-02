import React from 'react';
import ProductInfo from './product_info';

const Product = (props) => {
  const num = props.number;

  /*
  if (num === 2 || num === 3) {
    return (
      <div className='product left-products'>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
  } else */

    return (
      <div className={'product ' + (num === 1 && 'first-product')}>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
}

export default Product;