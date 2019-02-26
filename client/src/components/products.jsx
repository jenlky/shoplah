import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const Products = ({ products, isLoggedIn, addToDatabase }) => {
  /*
  console.log('Products - products:', products);
  console.log('Products - addtoCart:', addToCart);*/

  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let id = index + 1;
        return (
          <Product 
            key={product.name}
            id={id}  
            product={product} 
            isLoggedIn={isLoggedIn}
            addToDatabase={addToDatabase} 
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
  addToDatabase: PropTypes.func.isRequired
}; 

export default Products;