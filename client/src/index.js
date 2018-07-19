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
      products: [],
      num: [],
      item: [],
      qty: []
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
  }

  // has a bug in qty: [1, -1: NaN]
  addCart = (num, item) => {
    if (!this.state.num.includes(num)) {
      let updatedNum = this.state.num.concat(num); 
      let updatedItem = this.state.item.concat(item);
      let updatedQty = this.state.qty.concat(1);
      this.setState({
        num: updatedNum,
        item: updatedItem,
        qty: updatedQty
      })
    } else {
      console.log('num', num);

      let updatedQty = this.state.qty.slice(0);
      console.log('after slice', updatedQty);
      let index = updatedQty.indexOf(num);
      console.log('index', index);
      updatedQty[index] += 1;
      console.log('after +1', updatedQty);

      this.setState({qty: updatedQty});
    }
    console.log(this.state);
  }
  
  render() {
    return (
      <div>
        <Products products={this.state.products} addCart={this.addCart} />
        <ShoppingCart num={this.state.num} item={this.state.item} qty={this.state.qty} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
