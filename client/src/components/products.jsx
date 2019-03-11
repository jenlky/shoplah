import React from 'react';
import PropTypes from 'prop-types';
import Product from 'Product';

const Products = ({ products, idArray, isLoggedIn, addProduct, updateCart }) => {
  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let id = index + 1;
        return (
          <Product
            key={product.name}
            id={id}
            containsId={idArray.includes(id)} 
            product={product} 
            isLoggedIn={isLoggedIn}
            addProduct={addProduct}
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
  addProduct: PropTypes.func.isRequired,
  updateCart: PropTypes.func.isRequired
}; 

export default Products;