const express = require('express');
const router = express.Router();
const faker = require('faker');

// api object
const object = {
  "data": [
    {
      "image": "https://kommercio.id/full-stack-test/assets/product-1.jpg",
      "price": "900.00",
      "currency": "SGD",
      "name": "IPhone 7"
    },
    {
      "image": "https://kommercio.id/full-stack-test/assets/product-2.jpg",
      "price": "6.00",
      "currency": "SGD",
      "name": "3 Soliders Toy"
    },
    {
      "image": "https://kommercio.id/full-stack-test/assets/product-3.jpg",
      "price": "15.00",
      "currency": "SGD",
      "name": "Cool T-Shirt"
    },
    {
      "image": "https://kommercio.id/full-stack-test/assets/product-2.jpg",
      "price": "6.00",
      "currency": "SGD",
      "name": "Another Toy"
    },
    {
      "image": "https://kommercio.id/full-stack-test/assets/product-3.jpg",
      "price": "15.00",
      "currency": "SGD",
      "name": "Another T-Shirt"
    }
  ]
};

function fakeProducts() {
  let combinedObject = [];

  for (let x = 0; x < 10; x++) {
    let image = faker.image.image();
    let price = faker.commerce.price();
    let name = faker.commerce.productName();
    let object = {'image': image, 'price': price, 'name': name};
    
    combinedObject.push(object);
  }

  return combinedObject;
}

// object route
router.get('/products.json', (req, res) => {  
  res.json(object);
});

module.exports = router;