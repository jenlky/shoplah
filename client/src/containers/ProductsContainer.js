import React, { Component} from 'react';
import { connect } from 'react-redux';
import AddProduct from '../actions/AddProduct';
import UpdateCart from '../actions/UpdateCart';
import TogglePopup from '../actions/TogglePopup';
import Products from '../components/Products';

class ProductsContainer extends Component {
  render() {
    const { ...props } = this.props;
    
    if (!this.props.products) {
      return <div>loading</div>;
    } 

    return (
      <Products {...props} />
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products,
  idArray: state.productsReducer.id,
  isLoggedIn: state.userReducer.isLoggedIn,
  showPopup: state.productsReducer.showPopup,
});

const mapDispatchToProps = dispatch => ({
  addProduct: id => dispatch(AddProduct(id)),
  updateCart: (event, id) => dispatch(UpdateCart(event, id)),
  togglePopup: () => dispatch(TogglePopup()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);