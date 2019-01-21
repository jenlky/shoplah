import React from 'react';
import ProductInfo from './ProductInfo';
import PropTypes from 'prop-types';

const Product = ({ image, name, price, num, addToCart }) => {
  // how can I reduce and simplfy the chunk below hmm
  if (num === 1) {
    return (
      <div className='product first-product'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo price={price} number={num} addToCart={addToCart} />
      </div>
    );
  } else if (num === 2) {
    return (
      <div className='product left-products'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo price={price} number={num} addToCart={addToCart} />
      </div>
    );
  } else if (num === 3) {
    return (
      <div className='product left-products order'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo price={price} number={num} addToCart={addToCart} />
      </div>
    );
  } else if (num === 5) {
    return (
      <div className='product order'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo price={price} number={num} addToCart={addToCart} />
      </div>
    );
  } else {
    return (
      <div className='product'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo price={price} number={num} addToCart={addToCart} />
      </div>
    );
  }

  /* internal class conditional
  return (
    <div className={'product ' + (num === 1 && 'first-product')}>
      <img src={image} alt={name} className='img-size'></img>
      <ProductInfo product={props.product} number={num} addToCart={props.addToCart} />
    </div>
  );
  */
};

Product.PropsType = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  num: PropTypes.number.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Product;