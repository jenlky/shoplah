import React, { Component } from 'react';
import Products from './components/products';
import ShoppingCart from './components/shopping_cart';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      num: [],
      item: [],
      qty: [],
      totalPrice: 0,
      user: {
        isLoggedIn: false
      }
    };
  } 

  componentDidMount() {
    this.callApi()
      .then(res => {
        /*
        store.dispatch({
          type: 'RES_DATA_SUCCESS',
          products: res.data
        });*/
        console.log(res);
        this.setState({ products: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/products');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  }

  addToCart = (num, item) => {
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
      }, () => {
        // added callback which will be executed when setState() is completed
        console.log(`array don't have element`, this.state);
      });

    // if element is present in array already, increase qty of it by 1
    } else {
      let index = this.state.num.indexOf(num);
      updatedQty = this.state.qty.slice(0);
      updatedQty[index] += 1;
      this.setState({
        qty: updatedQty
      }, () => {
        console.log(`array have that element`, this.state);
      }); 
    }

    // when ADD TO CART is clicked, update state. after updating, calculate total price
    this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
  }

  calculateTotalPrice = (updatedNum, qty, item) => {
    let arr = [];
    console.log('updatedNum', updatedNum);

    updatedNum.map(num => {
      let index = updatedNum.indexOf(num);
      arr.push(qty[index] * item[index].price);
    });

    if (arr.length > 0) {
      let total = arr.reduce((acc, currentVal) => acc + currentVal);
      this.setState({ totalPrice: total });
    } else {
      this.setState({ totalPrice: 0 });
    }
  }

  removeFromCart = (num) => { 
    let updatedNum = this.state.num;
    let updatedQty = this.state.qty;
    let updatedItem = this.state.item;

    let index = updatedNum.indexOf(num);

    // remove clicked item with splice, and update state
    updatedNum.splice(index, 1);
    updatedQty.splice(index, 1);
    updatedItem.splice(index, 1);

    this.setState({
      num: updatedNum,
      item: updatedItem,
      qty: updatedQty
    });

    // when item is removedFromCart, update totalPrice
    this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
  }

  handleClick = (event, num) => {
    let updatedNum = this.state.num;
    let updatedQty = this.state.qty;
    let updatedItem = this.state.item;

    let id = event.currentTarget.id;
    console.log(id);
    let index = updatedNum.indexOf(num);

    if (id === 'plus') {
      updatedQty[index] += 1;
    } else if (id === 'minus') {
      updatedQty[index] -= 1;
    }

    this.setState({ qty: updatedQty });
    this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
  }

  inputChange = (event, num) => {
    const regex = /^[0-9\b]+$/;

    let updatedNum = this.state.num;
    let updatedQty = this.state.qty;
    let updatedItem = this.state.item;

    let index = updatedNum.indexOf(num);
    
    if (regex.test(event.target.value)) {
      updatedQty[index] = Number(event.target.value);
      this.setState({ qty: updatedQty });
      this.calculateTotalPrice(updatedNum, updatedQty, updatedItem);
    }
  }

  render() {
    return (
      <div>
        <Products products={this.state.products} addToCart={this.addToCart} user={this.state.user} />
        <ShoppingCart num={this.state.num} item={this.state.item} qty={this.state.qty} 
          totalPrice={this.state.totalPrice} removeFromCart={this.removeFromCart}  
          inputChange={this.inputChange} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;