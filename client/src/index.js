import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './configureStore';
import './index.css';
import App from './containers/App';
import { PAUSE } from 'redux-persist';
// import registerServiceWorker from './registerServiceWorker';

console.log(PAUSE);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>, 
  document.getElementById('root'));
//registerServiceWorker();