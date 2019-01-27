import { connect } from 'react-redux';
import { FetchProducts } from '../actions/FetchProducts';
import App from './App';

const mapDispatchToProps = dispatch => ({
  FetchProducts: () => dispatch(FetchProducts())
});

export default connect(mapDispatchToProps)(App);