import { combineReducers } from 'redux';
import productsReducer from './ProductsReducer';
import userReducer from './UserReducer';

export default combineReducers({
  productsReducer,
  userReducer
});