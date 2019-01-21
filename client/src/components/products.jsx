import React from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

/*
class Products extends Component {
  render() {
    return (
      <div className='img-container'>
        {this.props.products.map((product, index) => {
          let number = index + 1;
          return (
            <Product product={product} number={number} key={product.name} 
              addToCart={this.props.addToCart} />
          );
        })}
      </div>
    );
  }
} */

// where does addToCart comes from
const Products = ({ products, addToCart }) => (
  <div className='img-container'>
    {products.map((product, index) => {
      let num = index + 1;
      return (
        <Product key={product.name} num={num} {...product} 
          addToCart={() => addToCart(num, product)} />
      );
    })}
  </div>
);

// I'm not sure why I store currency as String in server/products.js
Products.PropTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  addToCart: PropTypes.func.isRequired
};

export default Products;