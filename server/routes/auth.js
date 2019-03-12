const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/login', 
  passport.authenticate('auth0', { scope: 'openid profile' })
);

router.get('/login/callback', 
  // http://localhost:3000/
  passport.authenticate('auth0', { failureRedirect: '/' }), (req, res) => {
  if (!req.user) {
    throw new Error('user null');
  }
  
  // http://localhost:3000/
  res.redirect('/');
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
  // http://localhost:3000/
  res.redirect('/'); 
});

module.exports = router;