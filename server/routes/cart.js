const express = require('express');
const router = express.Router();
const checkAuth = require('../helpers/checkAuth');
const handler = require('../controllers/cart');

router.get('/cart', checkAuth, handler.getAllProducts);
router.post('/cart', checkAuth, handler.addOneProduct);
router.put('/cart', checkAuth, handler.updateOneProduct);
router.delete('/cart', checkAuth, handler.deleteOneProduct);

module.exports = router;