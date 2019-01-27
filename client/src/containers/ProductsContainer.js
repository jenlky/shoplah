import { connect } from 'react-redux';
import { AddToCart } from '../actions/AddToCart';
import ProductsReducer from './reducer/ProductsReducer';
import Products from './components/Products';

const ProductsContainer = ({ products, addToCart }) => (
  <Products 
    products={products}
    addToCart={() => addToCart(num, cartItem)}
  />
)

// Actions: AddToCart
const mapStateToProps = state => ({
  products: ProductsReducer(state.products, AddToCart)
});

const mapDispatchToProps = dispatch => ({
  AddToCart: (num, cartItem) => dispatch(AddToCart(num, cartItem))
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);