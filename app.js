require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const port = process.env.PORT || 8080;
const productRoutes = require('./server/routes/products');
const orderRoutes = require('./server/routes/orders');
const authRoutes = require('./server/routes/auth-routes');

/*
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
}); */

// serve static files
app.use(express.static(path.join(__dirname, '/client/build'))); 

app.use(morgan('dev'));

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