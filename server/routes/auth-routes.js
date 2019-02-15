const express = require('express');
const router = express.Router();
const passport = require('passport');
const checkAuth = require('../middleware/checkAuth');

router.get('/login', 
  passport.authenticate('auth0', { scope: 'openid profile' })
);

router.get('/login/callback', 
  passport.authenticate('auth0', { failureRedirect: 'http://localhost:3000/' }), (req, res) => {
  if (!req.user) {
    throw new Error('user null');
  }
  
  res.redirect('http://localhost:3000/');
}); 

router.get('/checkAuth', (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: 'User is unauthorised' });
  } else {
    res.status(200).json({ user: req.user.username, userID: req.user.userID });
  }
});

router.get('/logout', (req, res) => {
  console.log('log out successfully');
  req.logOut();
  res.redirect('http://localhost:3000/'); 
});

// how does this guard the route
router.get('/cart', checkAuth, (req, res) => {
  res.redirect('http://localhost:3000/');
});

module.exports = router;