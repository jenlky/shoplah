import { connect } from 'react-redux';
import CalculatePrice from '../actions/CalculatePrice';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';
import RemoveFromCart from '../actions/RemoveFromCart';
import ShoppingCart from './components/ShoppingCart';

// reducer?


// Actions: CalculatePrice, InputQuantity, HandleClick, RemoveFromCart
const mapStateToProps = state => ({
  num: state.num,
  cartItem: state.cartItem,
  qty: state.qty,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  InputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  HandleClick: (event, num) => dispatch(HandleClick(event, num)),
  RemoveFromCart: (num, cartItem) => dispatch(RemoveFromCart(num, cartItem)),
  CalculatePrice: (num, qty, cartItem) => dispatch(CalculatePrice(num, qty, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);