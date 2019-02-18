import React from 'react';
import DropdownCartItem from './DropdownCartItem';

// Work on two things: 
// First is the look, second is how can I pass down products added to cart from state to props
const DropdownCart = ({ numOfItems }) => {
  console.log('numOfItems', numOfItems);

  return (
    <div className='dropdown-cart'>
      {/* numOfItems > 0 && <p>> 0 items</p> */}
      <div className='dropdown-cart-header'>recently added products</div>
      <DropdownCartItem />
    </div>
  );
}

export default DropdownCart;