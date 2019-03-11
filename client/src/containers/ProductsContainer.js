import React, { Component} from 'react';
import { connect } from 'react-redux';
import AddProduct from '../actions/AddProduct';
import UpdateCart from '../actions/UpdateCart';
import Products from '../../components/Products';

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
        addProduct={this.props.addProduct}
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
  addProduct: id => dispatch(AddProduct(id)),
  updateCart: (event, id) => dispatch(UpdateCart(event, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);