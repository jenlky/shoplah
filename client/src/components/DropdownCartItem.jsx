import React from 'react';

const DropdownCartItem = () => {

  return (
    <div> 
      <img src='' alt=''/>
      <div>
        <div className='cart-item-top-row'>
          <p>Product Name</p>
          <p>Price</p>
        </div>
        <div className='cart-item-btm-row'>
          <button>Delete</button>
        </div>
      </div>
      <div>
        <button>View My Shopping Cart</button>
      </div>
    </div>
  );
}

export default DropdownCartItem;