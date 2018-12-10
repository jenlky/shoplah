const express = require('express');
const router = express.Router();

router.get('/login', (req, res) => {
  res.send('login successful');
});

router.get('/logout', (req, res) => {
  res.send('logout successful');
});

module.exports = router;