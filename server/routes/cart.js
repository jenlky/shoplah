const express = require('express');
const router = express.Router();
const checkAuth = require('../helpers/checkAuth');
const handler = require('../controllers/cart');

router.get('/cart', checkAuth, handler.getAllProducts);
router.post('/cart/:id', checkAuth, handler.addOneProduct);
router.put('/cart/:id', checkAuth, handler.updateOneProduct);
router.delete('/cart/:id', checkAuth, handler.deleteOneProduct);

module.exports = router;