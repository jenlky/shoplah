import { connect } from 'react-redux';
import RemoveFromCart from '../actions/RemoveFromCart';
import InputQuantity from '../actions/InputQuantity';
import HandleClick from '../actions/HandleClick';
import CalculatePrice from '../actions/CalculatePrice';
import ShoppingCart from '../components/ShoppingCart';

// reducer?


// Actions: CalculatePrice, InputQuantity, HandleClick, RemoveFromCart
const mapStateToProps = state => ({
  num: state.num,
  cartItem: state.cartItem,
  qty: state.qty,
  totalPrice: state.totalPrice
});

const mapDispatchToProps = dispatch => ({
  RemoveFromCart: (num, cartItem) => dispatch(RemoveFromCart(num, cartItem)),
  InputQuantity: (event, num) => dispatch(InputQuantity(event, num)),
  HandleClick: (event, num) => dispatch(HandleClick(event, num)),
  CalculatePrice: (num, qty, cartItem) => dispatch(CalculatePrice(num, qty, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);