import { connect } from 'react-redux';
import { FetchProducts, AddToCart } from '../actions/actions';
import Products from './components/Products';

// Actions: FetchProducts, AddToCart
const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  //FetchProducts: () => dispatch(FetchProducts()),
  AddToCart: (num, cartItem) => dispatch(AddToCart(num, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);