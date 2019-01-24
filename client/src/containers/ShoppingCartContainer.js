import { connect } from 'react-redux';
import { CalculatePrice, InputQuantity, HandleClick, RemoveFromCart } from '../actions/actions';
import ShoppingCart from './components/ShoppingCart';

// reducer?


// Actions: CalculatePrice, InputQuantity, HandleClick, RemoveFromCart
const mapStateToProps = state => ({
  num: state.num,
  cartItem: state.cartItem,
  qty: state.qty,
  totalPrice: state.totalPrice,
  removeFromCart,
  inputQuantity,
  handleClick,
});

const mapDispatchToProps = state => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);