import React, { Component } from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const Products = ({ products, addToCart }) => {
  console.log('Products - products:', products);
  console.log('Products - addtoCart:', addToCart);

  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let num = index + 1;
        return (
          <Product key={product.name} product={product} num={num} addToCart={addToCart} />
        );
      })}
    </div>
  );
}; 

/*
class Products extends Component {
  constructor(props) {
    super(props);
    this.props.store.subscribe(() => 
      console.log(this.props.store.getState())
    );
  } 

  render() {
    if (products !== undefined) {
      return (
        <div className='img-container'>
          {products.map((product, index) => {
            let num = index + 1;
            return (
              <Product key={product.name} num={num} {...product} addToCart={addToCart} />
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
} */

/*
// I'm not sure why I store currency as String in server/products.js
Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
}; */

export default Products;