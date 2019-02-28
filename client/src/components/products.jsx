import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const Products = ({ products, idArray, isLoggedIn, addToDatabase, updateCart }) => {
  console.log('Products - idArray:', idArray);

  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let id = index + 1;
        return (
          <Product 
            key={product.name}
            id={id}
            idArray={idArray}  
            product={product} 
            isLoggedIn={isLoggedIn}
            addToDatabase={addToDatabase} 
            updateCart={updateCart}
          />
        );
      })}
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
  addToDatabase: PropTypes.func.isRequired
  // updateCart
}; 

export default Products;