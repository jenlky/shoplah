import React, { Component} from 'react';
import { connect } from 'react-redux';
import AddToCart from '../actions/AddToCart';
// import ProductsReducer from '../reducers/ProductsReducer';
import Products from '../components/Products';

/*
const ProductsContainer = ({ products, addToCart }) => {
  console.log(products);
  return (
    
  );
} */

class ProductsContainer extends Component {
  render() {
    if (!this.props.products) {
      return <div>loading</div>;
    } 

    return (
      <Products products={this.props.products} addToCart={this.props.addToCart} />
    );
  }
}

// Actions: AddToCart
const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  AddToCart: (num, cartItem) => dispatch(AddToCart(num, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);