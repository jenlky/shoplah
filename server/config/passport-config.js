const Auth0Strategy = require('passport-auth0');
const passport = require('passport');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/users');

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
  console.log(extraParams);
  console.log(profile);

  // check if user already exist in our database
  User.findOne({ authID: profile.id }).then((currentUser) => {
    if (currentUser) {
      // user already in our DB
      console.log('current user: ', currentUser);
      done(null, currentUser);
    } else {
      // if not, create new User in our DB
      new User({
        username: profile.displayName,
        userID: profile.id,
        thumbnail: profile.picture
      }).save().then((newUser) => {
        console.log('new user created: ', newUser);
        done(null, newUser);
      });
    }
  });
});

// You can use this section to keep a smaller payload
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  })
});

passport.use(strategy);

module.exports = router;