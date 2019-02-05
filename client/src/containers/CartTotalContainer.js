import React from 'react';
import { connect } from 'react-redux';
import CalculatePrice from '../actions/CalculatePrice';
import CartTotal from '../components/CartTotal';
import productsReducer from '../reducers/productsReducer';

const CartTotalContainer = ({ totalPrice }) => (
  <CartTotal totalPrice={totalPrice} />
);

const mapStateToProps = state => ({
  totalPrice: productsReducer(state.productsReducer.totalPrice, CalculatePrice)
});

export default connect(mapStateToProps, null)(CartTotalContainer);