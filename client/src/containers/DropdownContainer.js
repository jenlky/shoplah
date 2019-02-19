import React from 'react';
import { connect } from 'react-redux';
import DropdownCart from '../components/DropdownCart';

const DropdownContainer = ({ products }) => (
  <DropdownCart products={products} />
);

const mapStateToProps = state => ({
  products: state.productsReducer.productsId.map(id => state.productsReducer.products[id-1]),
  // qty: 
});

export default connect(mapStateToProps, null)(DropdownContainer);