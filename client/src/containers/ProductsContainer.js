import { connect } from 'react-redux';
import { FetchProducts, AddToCart } from '../actions/actions';
import Products from './components/Products';

// Actions: FetchProducts, AddToCart
const mapStateToProps = state => ({
  
});

const mapDispatchToProps = state => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);