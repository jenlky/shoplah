import { connect } from 'react-redux';
import App from '../App';
import FetchProducts from '../actions/FetchProducts';
import FetchUser from '../actions/FetchUser';

// Attempted import error: 'FetchProducts' is not exported from '../actions/FetchProducts'.
const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(FetchProducts()),
  fetchUser: () => dispatch(FetchUser())
});

export default connect(null, mapDispatchToProps)(App);