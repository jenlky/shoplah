const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 8080;

// serve static files
app.use(express.static(path.join(__dirname, '/client/build'))); 

app.use(morgan('dev'));
const productRoutes = require('./server/routes/products');
const orderRoutes = require('./server/routes/orders');

// initialise routes
app.use('/products', productRoutes); 
app.use('/orders', orderRoutes); 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
}); 

// start server
app.listen(port);
console.log('Listening to port', port);

module.exports = app; 