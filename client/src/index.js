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

  addCart = (num, item) => {
    // if num array doesn't have that element, insert that element
    if (!this.state.num.includes(num)) {
      let updatedNum = this.state.num.concat(num); 
      let updatedItem = this.state.item.concat(item);
      let updatedQty = this.state.qty.concat(1);
      this.setState({
        num: updatedNum,
        item: updatedItem,
        qty: updatedQty
      });

      console.log(this.state);
    // if element is present in array already, increase qty of it by 1
    } else {
      let index = this.state.num.indexOf(num);
      let updatedQty = this.state.qty.slice(0);
      updatedQty[index] += 1;
      this.setState({qty: updatedQty});

      console.log(this.state);
    }
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
