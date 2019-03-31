import React from 'react';
import DropdownCartItem from './DropdownCartItem';

const DropdownCart = ({ isLoggedIn, products, idArray, qtyArray, removeProduct }) => {
  //console.log('productsQty:', productsQty);
  const redirect = () => {
    switch(isLoggedIn) {
      case true:
        if (process.env.NODE_ENV === 'development') {
          window.location.href = 'http://localhost:3000/cart';
        } else {
          window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/cart';
        }
        break;

      case false:
        if (process.env.NODE_ENV === 'development') {
          window.location.href = 'http://localhost:8080/auth/login';
        } else {
          window.location.href = 'https://jenlky-shopping-cart.herokuapp.com/auth/login';
        }
        break;

      default:
        console.log('this.props.isLoggedIn is not true or false');  
    }
  }

  if (qtyArray.length > 0) {
    return (
      <div className='dropdown-cart-menu'>
        <div className='dropdown-cart-header v-center'>recently added products</div>
        {products.map((product, index) => {
          return (
            <DropdownCartItem
              key={product.name} 
              product={product}
              id={idArray[index]}
              qty={qtyArray[index]}
              removeProduct={removeProduct} 
            />
          );
        })}
        <div className='dropdown-cart-btn'>
          <button type='button' className='btn' onClick={redirect}>view my shopping cart</button>
        </div>
      </div>
    );
  }

  return (
    <div className='dropdown-cart-menu'>
      <div className='dropdown-cart-empty'>
        <span className='dropdown-cart-empty-describe'>no products yet</span>
      </div>
    </div>
  );
}

export default DropdownCart;