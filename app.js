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
const passportConfig = require('./server/config/passport-config');

const db_config = {
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database
};

// Recreate the connection since the old one cannot be reused
function handleDisconnect() {
  console.log('1. connecting to db:');
  connection = mysql.createConnection(db_config);

  // The server is either down or restarting (takes a while sometimes).
  connection.connect(err => {
    if (err) { 
      console.log('2. error when connecting to db:', err);
      // We introduce a delay before attempting to reconnect, to avoid a hot loop,
      // and to allow our node script to process asynchronous requests in the meantime.
      setTimeout(handleDisconnect, 1000);                          	
    }
  });

  // Connection to the MySQL server is usually lost due to either server restart, or a
  // connnection idle timeout (the wait_timeout server variable configures this)
  connection.on('error', err => {
    console.log('3. db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { 	
      handleDisconnect();                      	
    } else {                                      	
      throw err;
    }
  });
}

handleDisconnect();

app.set('view engine', 'ejs');

// serve static files
//app.use(express.static(path.join(__dirname, '/client/build'))); 

app.use(morgan('dev'));
app.use(passportConfig);

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