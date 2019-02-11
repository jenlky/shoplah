import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const Products = ({ products, addToCart }) => {
  /*
  console.log('Products - products:', products);
  console.log('Products - addtoCart:', addToCart);*/

  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let id = index + 1;
        return (
          <Product key={product.name} product={product} id={id} addToCart={addToCart} />
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
  addToCart: PropTypes.func.isRequired
}; 

export default Products;