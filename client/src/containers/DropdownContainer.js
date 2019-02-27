import React from 'react';
import { connect } from 'react-redux';
import DropdownCart from '../components/DropdownCart';
import RemoveFromDatabase from '../actions/RemoveFromDatabase';

const DropdownContainer = ({ products, idArray, qtyArray, removeFromDatabase, isLoggedIn }) => (
  <DropdownCart 
    products={products} 
    idArray={idArray}
    qtyArray={qtyArray}
    removeFromDatabase={removeFromDatabase}
    isLoggedIn={isLoggedIn}
  />
);

const mapStateToProps = state => ({
  products: state.productsReducer.id.map(id => state.productsReducer.products[id-1]),
  idArray: state.productsReducer.id,
  qtyArray: state.productsReducer.qty,
  isLoggedIn: state.userReducer.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  removeFromDatabase: id => dispatch(RemoveFromDatabase(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(DropdownContainer);