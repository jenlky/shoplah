const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login successful');
  //res.sendFile('../client/src/views/home.ejs');
});

router.get('/logout', (req, res) => {
  res.send('logout successful');
});

router.get('/cart', (req, res) => {
  console.log('checkout successful');
  res.send('checkout successful');
  //res.sendFile('../client/src/views/home.ejs');
});

module.exports = router;