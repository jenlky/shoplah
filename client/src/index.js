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
      qty: [],
      totalPrice: 0
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state);
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
    let updatedNum = this.state.num;
    let updatedItem = this.state.item;
    let updatedQty = this.state.qty;

    // if num array doesn't have that element, insert that element
    if (!this.state.num.includes(num)) {
      updatedNum = this.state.num.concat(num); 
      updatedItem = this.state.item.concat(item);
      updatedQty = this.state.qty.concat(1);

      this.setState({
        num: updatedNum,
        item: updatedItem,
        qty: updatedQty
      });

      console.log(`array don't have element`, this.state);
    // if element is present in array already, increase qty of it by 1
    } else {
      let index = this.state.num.indexOf(num);
      updatedQty = this.state.qty.slice(0);
      updatedQty[index] += 1;
      this.setState({qty: updatedQty});

      console.log(`array have that element`, this.state);
    }

    // when ADD TO CART is clicked, update state. after updating, calculate total price
    this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
  }

  calculateTotalPrice = (updatedNum, qty, item) => {
    let arr = [];
    console.log(updatedNum);

    updatedNum.map(num => {
      let index = updatedNum.indexOf(num);
      arr.push(qty[index] * item[index].price);
    });
    console.log(arr);

    if (arr.length > 0) {
      let total = arr.reduce((acc, currentVal) => acc + currentVal);
      console.log(total);
      this.setState({ totalPrice: total });
    }
  }
  
  render() {
    return (
      <div>
        <Products products={this.state.products} addCart={this.addCart} />
        <ShoppingCart num={this.state.num} item={this.state.item} qty={this.state.qty} totalPrice={this.state.totalPrice} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
