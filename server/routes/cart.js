const express = require('express');
const router = express.Router();
const checkAuth = require('../helpers/checkAuth');
const handler = require('../controllers/cart');

// FetchFromDatabase
router.get('/', checkAuth, handler.getAllProducts);

// AddToDatabase
router.post('/id/:id', checkAuth, handler.addOneProduct);

// UpdateDatabase 
router.put('/id/:id/qty/:qty', checkAuth, handler.updateOneProduct);

// RemoveFromDatabase
router.delete('/id/:id', checkAuth, handler.deleteOneProduct);

module.exports = router;