import React, { Component } from 'react';

export default class ProductInfo extends Component { 

  handleClick = () => {
    this.props.addToCart(this.props.number, this.props.product);
  }

  render() {
    return (
      <div className='product-info'>
        <div>
          <p>Product {this.props.number}</p>      
          <p>{this.props.product.currency + " " + this.props.product.price}</p>
        </div>
        <button onClick={this.handleClick}>Add to cart</button>
      </div>
    );
  }
}