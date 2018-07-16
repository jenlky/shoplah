let express = require('express');
let app = express();
let port = 8080;
let routes = require('./server/routes/api');

// serve static files
app.use(express.static('public'));

// initialise routes
app.use(routes);

// start server
app.listen(port);
console.log('Listening to port 8080...');

module.exports = app;