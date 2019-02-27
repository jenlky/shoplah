import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import RemoveFromDatabase from '../actions/RemoveFromDatabase';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';

const CartContainer = ({ productsId, qty, products, removeFromDatabase, inputQuantity, handleClick }) => (
  <Cart 
    productsId={productsId} 
    qty={qty} 
    products={products}
    removeFromDatabase={removeFromDatabase}
    inputQuantity={inputQuantity}
    handleClick={handleClick}
  />
);

const mapStateToProps = state => ({
  productsId: state.productsReducer.productsId,
  qty: state.productsReducer.qty,
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => ({
  removeFromDatabase: id => dispatch(RemoveFromDatabase(id)),
  inputQuantity: (value, id) => dispatch(InputQuantity(value, id)),
  handleClick: (event, id) => dispatch(HandleClick(event, id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);