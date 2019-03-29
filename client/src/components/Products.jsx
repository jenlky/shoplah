import React from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

const Products = ({ products, idArray, showPopup, ...props }) => {
  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let id = index + 1;
        return (
          <Product
            key={product.name}
            product={product} 
            id={id}
            containsId={idArray.includes(id)} 
            {...props}
          />
        );
      })}
      {showPopup ? 
        (<div className='added-popup'>
          Item has been added to your shopping cart
        </div>)
        : null
      }
    </div>
  );
}; 

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  idArray: PropTypes.array.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  addProduct: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}; 

export default Products;
