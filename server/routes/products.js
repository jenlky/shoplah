const express = require('express');
const router = express.Router();

const products = {
  "data": [
    {
      "image": "https://laz-img-sg.alicdn.com/p/2/apple-iphone-8-plus-256gb-space-grey-1511772000-55213477-8ce5fc6991abb11be5c4be0b9d1104ac-catalog.jpg_400x400q80.jpg_.webp",
      "price": 1350.00,
      "currency": "SGD",
      "name": "IPhone 7"
    },
    {
      "image": "https://my-test-11.slatic.net/original/706eb0bd2354e00b7d65811d1a5b6ab1.jpg_320x320q80.jpg_.webp",
      "price": 15.00,
      "currency": "SGD",
      "name": "Sling Bag"
    },
    {
      "image": "https://laz-img-sg.alicdn.com/original/8054b9fa901aed5a6c2f1076369c33c1.jpg_320x320q80.jpg_.webp",
      "price": 10.00,
      "currency": "SGD",
      "name": "Dry Fit Round Neck"
    },
    {
      "image": "https://my-test-11.slatic.net/p/546dcb90439f5629799dda39f5648ac4.jpg_320x320q80.jpg_.webp",
      "price": 38.00,
      "currency": "SGD",
      "name": "Children Toy"
    },
    {
      "image": "https://laz-img-sg.alicdn.com/original/fcd09bbde2e8bb3260608df337992b07.jpg_320x320q80.jpg_.webp",
      "price": 8.00,
      "currency": "SGD",
      "name": "Vogue T-Shirt"
    }
  ]
};

router.get('/products', (req, res, next) => {  
  res.status(200).json(products);
});

router.post('/products', (req, res, next) => {  
  res.status(200).json({
    message: 'Handling POST requests to /products'
  });
});

router.get('/products/:productId', (req, res, next) => {
  const id = req.params.productId;
  if (id === 'special') {
    res.status(200).json({
      message: 'You discovered the special ID',
      id
    });
  } else {
    res.status(200).json({
      message: 'You passed an ID'
    });
  }
});

router.patch('/products/:productId', (req, res, next) => {  
  res.status(200).json({
    message: 'Updated product!'
  });
});

router.delete('/products/:productId', (req, res, next) => {  
  res.status(200).json({
    message: 'Deleted product!'
  });
});

module.exports = router;