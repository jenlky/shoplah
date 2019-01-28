import React, { Component } from 'react';
// import Navbar from './components/Navbar';
// import Products from './components/Products';
// import ShoppingCart from './components/ShoppingCart';
import { Switch, Route, Redirect } from 'react-router-dom';
import CartPage from './components/CartPage';
import MainPage from './components/MainPage';
//import FetchProducts from './actions/FetchProducts';
import FetchUser from './actions/FetchUser';

class App extends Component {
  /*
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      num: [],
      cartItem: [],
      qty: [],
      totalPrice: 0,
      user: {
        username: '',
        userID: '',
        thumbnail: '',
        isLoggedIn: false
      }
    };
  } 

  componentDidMount() {
    this.callApi()
      .then(res => {
        console.log(res);
        this.setState({ products: res.data });
        console.log(this.state);
      })
      .catch(err => console.log(err));

    fetch('http://localhost:8080/auth/checkAuth', { credentials: 'include' })
      .then(res => {
        if (!res.ok) {
          throw Error();
        }
        return res;
      })
      .then(res => res.json())
      .then(this.setState(prevState => ({
        user: {
          ...prevState.user, 
          isLoggedIn: true 
        }
      })))
      .then(console.log(this.state))
      .catch(error => {
        this.setState({ 
          user: {
            username: '', 
            userID: '',
            thumbnail: '',
            isLoggedIn: false 
          }
        });
        console.error('Error:', error);
      }); 
  }
  
  callApi = async () => {
    const response = await fetch('/products');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  } 

  addToCart = (num, product) => {
    let updatedNum = this.state.num;
    let updatedCart = this.state.cartItem;
    let updatedQty = this.state.qty;

    // if num array doesn't have that element, insert that element
    if (!this.state.num.includes(num)) {
      updatedNum = this.state.num.concat(num); 
      updatedCart = this.state.cartItem.concat(product);
      updatedQty = this.state.qty.concat(1);

      this.setState({
        num: updatedNum,
        cartItem: updatedCart,
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
    this.calculateTotalPrice(updatedNum, updatedQty, updatedCart);
  }

  calculateTotalPrice = (updatedNum, updatedQty, updatedCart) => {
    let arr = [];
    console.log('updatedNum', updatedNum);

    updatedNum.map(num => {
      let index = updatedNum.indexOf(num);
      arr.push(updatedQty[index] * updatedCart[index].price);
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
    let updatedCart = this.state.cartItem;

    let index = updatedNum.indexOf(num);

    // remove clicked product with splice, and update state
    updatedNum.splice(index, 1);
    updatedQty.splice(index, 1);
    updatedCart.splice(index, 1);

    this.setState({
      num: updatedNum,
      cartItem: updatedCart,
      qty: updatedQty
    });

    // when product is removedFromCart, update totalPrice
    this.calculateTotalPrice(updatedNum, updatedQty, updatedCart);
  }

  handleClick = (event, num) => {
    let updatedNum = this.state.num;
    let updatedQty = this.state.qty;
    let updatedCart = this.state.cartItem;

    let id = event.currentTarget.id;
    console.log(id);
    let index = updatedNum.indexOf(num);

    if (id === 'plus') {
      updatedQty[index] += 1;
    } else if (id === 'minus') {
      updatedQty[index] -= 1;
    }

    this.setState({ qty: updatedQty });
    this.calculateTotalPrice(updatedNum, updatedQty, updatedCart);
  }

  inputQuantity = (event, num) => {
    const regex = /^[0-9\b]+$/;

    let updatedNum = this.state.num;
    let updatedQty = this.state.qty;
    let updatedCart = this.state.cartItem;

    let index = updatedNum.indexOf(num);
    
    if (regex.test(event.target.value)) {
      updatedQty[index] = Number(event.target.value);
      this.setState({ qty: updatedQty });
      this.calculateTotalPrice(updatedNum, updatedQty, updatedCart);
    }
  }

  // checkAuth component is not being used to checkAuth, it's done in 
  // <Route exact path='/auth/checkAuth' component={ CheckAuth } />
  // <Route exact path='/profile' component={ } />

  render() {
    return (
      <main>
        <Navbar isLoggedIn={this.state.user.isLoggedIn} />
        <Products products={this.state.products} addToCart={this.addToCart} />
        <ShoppingCart num={this.state.num} cartItem={this.state.cartItem} qty={this.state.qty} 
          totalPrice={this.state.totalPrice} removeFromCart={this.removeFromCart}  
          inputQuantity={this.inputQuantity} handleClick={this.handleClick} />
        <Switch>
          <Route exact path='/cart' render={props => <CartPage {...props} />} />
        </Switch>
      </main> 
    );
  }
  */

  constructor(props) {
    super(props);
    this.props.fetchProducts();
    // Unhandled Rejection (Error)
    // this.props.fetchUser();
  }
  
  render() {
    return (
      <Switch> 
        <Route exact path='/cart' render={() => <CartPage />} />
        <Route exact path='/' render={() => <MainPage />} />
      </Switch>
    );
  }
}

export default App;