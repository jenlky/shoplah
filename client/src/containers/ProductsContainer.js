import React, { Component} from 'react';
import { connect } from 'react-redux';
import AddToCart from '../actions/AddToCart';
import Products from '../components/Products';

class ProductsContainer extends Component {
  render() {
    // console.log('ProductsContainer - addToCart:', this.props.addToCart);

    if (!this.props.products) {
      return <div>loading</div>;
    } 

    return (
      <Products 
        products={this.props.products} 
        isLoggedIn={this.props.isLoggedIn}
        addToCart={this.props.addToCart} />
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  addToCart: id => dispatch(AddToCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);