import React from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import productsReducer from '../reducers/productsReducer';
import AddToCart from '../actions/AddToCart';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';

const CartContainer = ({ productsId, qty, products, removeFromCart, inputQuantity, handleClick }) => (
  <Cart 
    productsId={productsId} 
    qty={qty} 
    products={products}
    removeFromCart={removeFromCart}
    inputQuantity={inputQuantity}
    handleClick={handleClick}
  />
);

// AddToCart, RemoveFromCart return updated num, qty
// Both HandleClick and InputQuantity action return updated qty

// The action in productsReducer below can only allow AddToCart to change store.
// Thus when attempting to removeFromCart, handleClick and inputQuantity - it will result in an increase in qty.


const mapStateToProps = state => ({
  productsId: productsReducer(state.productsReducer.productsId, AddToCart),
  qty: productsReducer(state.productsReducer.qty, AddToCart),
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => ({
  removeFromCart: productId => dispatch(RemoveFromCart(productId)),
  inputQuantity: (event, productId) => dispatch(InputQuantity(event, productId)),
  handleClick: (event, productId) => dispatch(HandleClick(event, productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);