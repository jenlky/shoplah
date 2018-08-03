import React from 'react';
import ProductInfo from './product_info';

const Product = (props) => {
  const num = props.number;

  // how can I reduce and simplfy the chunk below hmm
  if (num === 1) {
    return (
      <div className='product first-product'>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
  } else if (num === 2) {
    return (
      <div className='product left-products'>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
  } else if (num === 3) {
    return (
      <div className='product left-products order'>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
  } else if (num === 5) {
    return (
      <div className='product order'>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
  } else {
    return (
      <div className='product'>
        <img src={props.product.image} alt={props.product.name} className='img-size'></img>
        <ProductInfo product={props.product} number={props.number} 
          addToCart={props.addToCart} />
      </div>
    );
  }

  /* internal class conditional
  return (
    <div className={'product ' + (num === 1 && 'first-product')}>
      <img src={props.product.image} alt={props.product.name} className='img-size'></img>
      <ProductInfo product={props.product} number={props.number} 
        addToCart={props.addToCart} />
    </div>
  );
  */
}

export default Product;