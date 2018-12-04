const express = require('express');
const router = express.Router();

// products object
const productsObject = {
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

router.get('/', (req, res, next) => {  
  res.status(200).json(productsObject);
});

router.post('/', (req, res, next) => {  
  res.status(200).json({
    message: 'Handling POST requests to /products'
  });
});

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id: id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.patch('/:productId', (req, res, next) => {  
  res.status(200).json({
    message: 'Updated product!'
  });
});

router.delete('/:productId', (req, res, next) => {  
  res.status(200).json({
    message: 'Deleted product!'
  });
});

module.exports = router;