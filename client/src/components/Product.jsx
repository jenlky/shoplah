import React from 'react';
import PropTypes from 'prop-types';
import ProductInfo from './ProductInfo';

// id, product, containsId, isLoggedIn, addProduct, updateCart, togglePopup
const Product = ({ ...props }) => {
  const id = props.id;
  const { image, name, price } = props.product;

  if (id === 1) {
    return (
      <div className='product first-product'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} {...props} />
      </div>
    );
  } else if (id === 2) {
    return (
      <div className='product left-products'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} {...props} />
      </div>
    );
  } else if (id === 3) {
    return (
      <div className='product left-products order'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} {...props} />
      </div>
    );
  } else if (id === 5) {
    return (
      <div className='product order'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} {...props} />
      </div>
    );
  } else {
    return (
      <div className='product'>
        <img src={image} alt={name} className='img-size'></img>
        <ProductInfo id={id} name={name} price={price} {...props} />
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
