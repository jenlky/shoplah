require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
//const morgan = require('morgan');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const session = require('express-session');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;
const productRoutes = require('./server/routes/products');
const orderRoutes = require('./server/routes/orders');
const authRoutes = require('./server/routes/auth-routes');
const passportConfig = require('./server/config/passport-config');

mongoose.connect(process.env.dbURL, 
  { keepAlive: true, keepAliveInitialDelay: 300000, useNewUrlParser: true }, () => {
  console.log('connected to mLab');
});

app.set('view engine', 'ejs');

// serve static files
//app.use(express.static(path.join(__dirname, '/client/build'))); 

//app.use(morgan('dev'));

app.use(session({
  secret: process.env.secret,
  cookie: {maxAge: 7200000},
  resave: false,
  saveUninitialized: true
}));

// initialise passport
app.use(passport.initialize());
app.use(passport.session());

// set up routes
app.use('/products', productRoutes);
app.use('/orders', orderRoutes); 
app.use('/auth', authRoutes);

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
}); 

// start server
app.listen(port, () => {
  console.log('Listening to port', port);
});