import React from 'react';
import { connect } from 'react-redux';
import CartLogo from '../../components/CartLogo';

const CartLogoContainer = ({ numOfItems }) => (
  <CartLogo numOfItems={numOfItems} />
);

const mapStateToProps = state => ({
  numOfItems: state.productsReducer.numOfItems
});

export default connect(mapStateToProps, null)(CartLogoContainer);