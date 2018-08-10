const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const routes = require('./server/routes/api');

// serve static files
app.use(express.static(path.join(__dirname, '/client/build'))); 

// initialise routes
app.use(routes); 

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
}); 

// start server
app.listen(port);
console.log('Listening to port 8080...');

module.exports = app; 