import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Products from './components/products';
import ShoppingCart from './components/shopping_cart';
// import registerServiceWorker from './registerServiceWorker';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state.products);
      })
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/products.json');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  // add callback
  addCart = (obj) => {

  }

  render() {
    return (
      <div>
        <Products products={this.state.products} />
        <ShoppingCart />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
