import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import asyncDispatchMiddleware from './asyncDispatchMiddleware';

const middlewares = [thunk, asyncDispatchMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = compose(applyMiddleware(...middlewares))(createStore)(persistedReducer);
console.log('configureStore isLoggedIn', store.getState().userReducer.isLoggedIn);

export const persistor = persistStore(store);