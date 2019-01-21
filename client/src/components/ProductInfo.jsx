import React from 'react';
import PropTypes from 'prop-types';

/*
export default class ProductInfo extends Component {

  handleClick = () => {
    this.props.addToCart(this.props.number, this.props.product);
  }

  render() {
    return (
      <div className='product-info'>
        <div>
          <p>Product {this.props.number}</p>      
          <p>{"$ " + this.props.product.price}</p>
        </div>
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}
*/

const ProductInfo = ({ num, price, addToCart }) => (
  <div className='product-info'>
    <div>
      <p>Product {num}</p>      
      <p>{"$ " + price}</p>
    </div>
    <button onClick={addToCart}>Add</button>
  </div>
);

ProductInfo.PropTypes = {
  num: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductInfo;