import React, { Component} from 'react';
import { connect } from 'react-redux';
import AddToCart from '../actions/AddToCart';
import ProductsReducer from '../reducers/ProductsReducer';
import Products from '../components/Products';

// Actions: AddToCart
class ProductsContainer extends Component {
  render() {
    console.log(this.props.products);

    if (!this.props.products) {
      return <div>loading</div>;
    } 

    return (
      <Products products={this.props.products} addToCart={this.props.addToCart} />
    );
  }
}

const mapStateToProps = state => ({
  products: state.ProductsReducer.products.data
});

// where does AddToCart(num, cartItem) parameters come from
const mapDispatchToProps = dispatch => ({
  AddToCart: () => dispatch(AddToCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);