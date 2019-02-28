import React, { Component} from 'react';
import { connect } from 'react-redux';
//import AddToCart from '../actions/AddToCart';
import AddToDatabase from '../actions/AddToDatabase';
import UpdateCart from '../actions/UpdateCart';
import Products from '../components/Products';

class ProductsContainer extends Component {
  render() {
    //console.log('ProductsContainer - qtyArray:', this.props.qtyArray);

    if (!this.props.products) {
      return <div>loading</div>;
    } 

    return (
      <Products 
        products={this.props.products}
        idArray={this.props.idArray} 
        isLoggedIn={this.props.isLoggedIn}
        addToDatabase={this.props.addToDatabase} 
        updateCart={this.props.updateCart}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  idArray: state.productsReducer.id,
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  addToDatabase: (id) => dispatch(AddToDatabase(id)),
  updateCart: id => dispatch(UpdateCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);