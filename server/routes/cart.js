const express = require('express');
const router = express.Router();
const checkAuth = require('../helpers/checkAuth');
const handler = require('../controllers/cart');

// FetchFromDatabase
router.get('/cart', checkAuth, handler.getAllProducts);

// AddToDatabase
router.post('/cart/:id', checkAuth, handler.addOneProduct);

// UpdateDatabase 
// use multiple url parameter or query parameter
router.put('/cart/:id', checkAuth, handler.updateOneProduct);

// RemoveFromDatabase
router.delete('/cart/:id', checkAuth, handler.deleteOneProduct);

module.exports = router;