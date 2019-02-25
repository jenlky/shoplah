const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: [Number],
  qty: [Number],
  numOfItems: Number,
  totalPrice: Number
});

const userSchema = new Schema({
  username: String,
  userID: String,
  picture: String,
  products: productSchema
});

const User = mongoose.model('User', userSchema);

module.exports = User;