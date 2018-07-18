const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const routes = require('./server/routes/api');

let dir = __dirname + 'public';
// serve static files
app.use(express.static(dir)); 

// initialise routes
app.use(routes); 

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'));
}); 

// start server
app.listen(port);
console.log('Listening to port 8080...');

module.exports = app; 