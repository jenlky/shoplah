import React, { Component } from 'react';
import ProductLarge from './product_large';
//import ProductInfo from './product_info';
import Product from './product';

const Products = ({products}) => {

  return (
    <div className='img-container'>
      {products.map((product, index) => {
        let number = index + 1;
        return (
          <Product product={product} number={number} key={product.name} />
        );
      })}
    </div>
  );
}

export default Products;

/* I tried to convert it into a class to store the state of spliced array where iPhone (firstObj) was in the middle, then loop it.

export default class Product extends Component {
  state = { spliced: "" };

  
  render() {
    return (
      <div className='img-container'>
        {newProducts.map((product, index) => {
          let number = index + 1;
          return (
            <Product product={product} number={number} key={product.image} />
          );
        })}
      </div>
    );
  }
} 
*/

/*
  // I can make it scalable by testing if there are odd or even numbers of products. 
  // If there are odd number of products, there will be one in the middle. The current concept of 2 1 2 will work. 
  // However if there are even number of products, one of the sides will have more like this 2 1 3. 

    const evenOrOdd = products.length % 2; 

    let firstObj = products.pop();
    products.splice(iteration, 0, firstObj);
    
    let counter = 0;
    console.log(products);

  const sideProducts = products.map((product, index) => {
    let number = index + 1;

    console.log(product);
    if (counter < iteration) {
      counter = counter + 1;
      console.log(product);
      return (
        <div>
          <Product product={product} number={number} />
        </div>
      );
    } else {
      counter = 0;
      return (
        <Product product={product} number={number} />
      );
    }
  });

  I tried to do a leftArr, center product, rightArr but there was an error. 
  So you probably can't return two of the same components in React. 
  How should I approach this then?

  {leftArr.map((product, index) => {
    let number = index + 1;
    return (
      <Product product={product} number={number} key={product.image} />
    );
  })}

  {rightArr.map((product, index) => {
    let number = index + 1;
    return (
      <Product product={product} number={number} key={product.image} />
    );
  })}
*/