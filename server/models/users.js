const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  userID: String,
  picture: String,
  products: {
    id: [Number],
    qty: [Number],
  }
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;