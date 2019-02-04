import React from 'react';
import { connect } from 'react-redux';
import CalculatePrice from '../actions/CalculatePrice';
import CartTotal from '../components/CartTotal';
import ProductsReducer from '../reducers/ProductsReducer';

const CartTotalContainer = ({ totalPrice }) => (
  <CartTotal totalPrice={totalPrice} />
);

const mapStateToProps = state => ({
  totalPrice: ProductsReducer(state.ProductsReducer.totalPrice, CalculatePrice)
});

export default connect(mapStateToProps, null)(CartTotalContainer);