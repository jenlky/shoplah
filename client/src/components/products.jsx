import React from 'react';
import Product from './product';

const Products = ({products, addToCart}) => {
  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let number = index + 1;
        return (
          <Product product={product} number={number} key={product.name} 
            addToCart={addToCart} />
        );
      })}
    </div>
  );
}

export default Products;