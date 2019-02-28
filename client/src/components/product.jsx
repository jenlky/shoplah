import React from 'react';
import ProductInfo from './ProductInfo';
import PropTypes from 'prop-types';

const Product = ({ id, idArray, product, isLoggedIn, addToDatabase, updateCart }) => {
  const name = product.name;
  const price = product.price;

  if (id === 1) {
    return (
      <div className='product first-product'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          idArray={idArray} isLoggedIn={isLoggedIn} 
          addToDatabase={addToDatabase} updateCart={updateCart}
        />
      </div>
    );
  } else if (id === 2) {
    return (
      <div className='product left-products'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          idArray={idArray} isLoggedIn={isLoggedIn} 
          addToDatabase={addToDatabase} updateCart={updateCart}
        />
      </div>
    );
  } else if (id === 3) {
    return (
      <div className='product left-products order'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          idArray={idArray} isLoggedIn={isLoggedIn} 
          addToDatabase={addToDatabase} updateCart={updateCart}
        />
      </div>
    );
  } else if (id === 5) {
    return (
      <div className='product order'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          idArray={idArray} isLoggedIn={isLoggedIn} 
          addToDatabase={addToDatabase} updateCart={updateCart}
        />
      </div>
    );
  } else {
    return (
      <div className='product'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          idArray={idArray} isLoggedIn={isLoggedIn} 
          addToDatabase={addToDatabase} updateCart={updateCart}
        />
      </div>
    );
  }
};

Product.PropsType = {
  id: PropTypes.number.isRequired,
  // idArray 
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addToDatabase: PropTypes.func.isRequired
  // updateCart 
};

export default Product;