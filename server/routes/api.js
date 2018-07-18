const express = require('express');
const router = express.Router();

// api object
const obj = {
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

// object route
router.get('/products.json', (req, res) => {
  res.json(obj);
});

module.exports = router;