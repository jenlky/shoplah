const express = require('express');
const router = express.Router();
const passport = require('passport');

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

router.get('/logout', (req, res) => {
  console.log('log out successfully');
  req.logOut();
  res.redirect('http://localhost:3000/'); 
});

router.get('/cart', 
  passport.authenticate('auth0', { failureRedirect: 'http://localhost:3000/' }), (req, res) => {
  res.redirect('http://localhost:3000/');
});

module.exports = router;