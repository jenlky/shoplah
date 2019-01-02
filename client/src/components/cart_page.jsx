import Products from './products';
import React, { Component } from 'react';

class CartPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
    }
  }

  render() {
    return (
      <div>
        <Products />

      </div>   
    );
  }
}

export default CartPage;