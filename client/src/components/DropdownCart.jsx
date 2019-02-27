import React from 'react';
import DropdownCartItem from './DropdownCartItem';

const DropdownCart = ({ products, idArray, qtyArray, removeFromDatabase, isLoggedIn }) => {
  //console.log('productsQty:', productsQty);
  const redirect = () => {
    if (isLoggedIn) {
      window.location.href = 'http://localhost:3000/cart';
    } else {
      window.location.href = 'http://localhost:8080/auth/login';
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
              removeFromDatabase={removeFromDatabase} 
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