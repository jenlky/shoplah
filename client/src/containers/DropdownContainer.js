import React from 'react';
import { connect } from 'react-redux';
import DropdownCart from '../components/DropdownCart';
import RemoveFromCart from '../actions/RemoveFromCart';

const DropdownContainer = ({ products, productsId, productsQty, removeFromCart }) => (
  <DropdownCart 
    products={products} 
    productsId={productsId}
    productsQty={productsQty}
    removeFromCart={removeFromCart}
  />
);

const mapStateToProps = state => ({
  products: state.productsReducer.productsId.map(id => state.productsReducer.products[id-1]),
  productsId: state.productsReducer.productsId,
  productsQty: state.productsReducer.qty
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: id => dispatch(RemoveFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);