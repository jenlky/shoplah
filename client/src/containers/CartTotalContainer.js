import React from 'react';
import { connect } from 'react-redux';
import CartTotal from '../../components/CartTotal';

const CartTotalContainer = ({ totalPrice }) => (
  <CartTotal totalPrice={totalPrice} />
);

const mapStateToProps = state => ({
  totalPrice: state.productsReducer.totalPrice
});

export default connect(mapStateToProps, null)(CartTotalContainer);