import React, { Component } from 'react';

export default class ProductInfo extends Component {
  // class fields - Not a part of ECMAScript specification yet. But if you're using a Babel transpiler, this syntax should work.
  // change state to take in array or obj
  state = { 
    cart: false 
  };

  addCart = () => {
    this.setState({ cart: true });
  }

  render() {
    return (
      <div className='product-info'>
        <div>
          <p>Product {this.props.number}</p>      
          <p>{this.props.product.currency + " " + this.props.product.price}</p>
        </div>
        <button onClick={this.addCart}>Add to cart</button>
      </div>
    );
  }
}