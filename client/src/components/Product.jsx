import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from 'ProductInfo';

const Product = ({ id, product, containsId, isLoggedIn, addProduct, updateCart }) => {
  const name = product.name;
  const price = product.price;

  if (id === 1) {
    return (
      <div className='product first-product'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          containsId={containsId} isLoggedIn={isLoggedIn} 
          addProduct={addProduct} updateCart={updateCart}
        />
      </div>
    );
  } else if (id === 2) {
    return (
      <div className='product left-products'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          containsId={containsId} isLoggedIn={isLoggedIn} 
          addProduct={addProduct} updateCart={updateCart}
        />
      </div>
    );
  } else if (id === 3) {
    return (
      <div className='product left-products order'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          containsId={containsId} isLoggedIn={isLoggedIn} 
          addProduct={addProduct} updateCart={updateCart}
        />
      </div>
    );
  } else if (id === 5) {
    return (
      <div className='product order'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          containsId={containsId} isLoggedIn={isLoggedIn} 
          addProduct={addProduct} updateCart={updateCart}
        />
      </div>
    );
  } else {
    return (
      <div className='product'>
        <img src={product.image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} 
          containsId={containsId} isLoggedIn={isLoggedIn} 
          addProduct={addProduct} updateCart={updateCart}
        />
      </div>
    );
  }
};

Product.PropsType = {
  id: PropTypes.number.isRequired,
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  containsId: PropTypes.bool.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
};

export default Product;
