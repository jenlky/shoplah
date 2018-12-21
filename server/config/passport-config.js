const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const strategy = new Auth0Strategy({
  domain: process.env.domain,
  clientID: process.env.clientID,
  clientSecret: process.env.clientSecret,
  callbackURL: process.env.callbackURL,
  scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  // accessToken is the token to call Auth0 API (not needed in the most cases)
  // extraParams.id_token has the JSON Web Token
  // profile has all the information from the user
  console.log('access token', accessToken);
  console.log('refresh token', refreshToken);
  console.log('extra params', extraParams);
  console.log('profile', profile);
  
  return done(null, profile);
});

// You can use this section to keep a smaller payload
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(strategy);

module.exports = router;