import React from 'react';

const ShoppingCartTotal = (props) => {

  const calculateTotalPrice = () => {
    let arr = [];

    this.props.num.map(num => {
      let index = this.props.num.indexOf(num);
      arr.push(this.props.qty[index] * this.props.item[index].price);
    });
    console.log(arr);

    if (arr.length > 0) {
      let total = arr.reduce((acc, currentVal) => acc + currentVal)
    }

    console.log(this.props);
  }


  return (
    <div className=''>
      {calculateTotalPrice}
    </div>
  );
}

export default ShoppingCartTotal;