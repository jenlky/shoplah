import React from 'react';
import { connect } from 'react-redux';
import RemoveProduct from '../actions/RemoveProduct';
import DropdownCart from '../components/DropdownCart';

const DropdownContainer = ({ ...props }) => (
  <DropdownCart {...props} />
);

const mapStateToProps = state => ({
  products: state.productsReducer.id.map(id => state.productsReducer.products[id-1]),
  idArray: state.productsReducer.id,
  qtyArray: state.productsReducer.qty,
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  removeProduct: (id) => dispatch(RemoveProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);