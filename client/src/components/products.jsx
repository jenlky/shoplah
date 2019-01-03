import React, { Component } from 'react';
import Product from './product';

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
}

export default Products;