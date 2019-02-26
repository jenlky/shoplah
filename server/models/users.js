const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// check if mongoose schema can add a default value
const userSchema = new Schema({
  username: String,
  userID: String,
  picture: String,
  products: {
    id: [Number],
    qty: [Number],
    numOfItems: { type: Number, default: 0 },
    totalPrice: { type: Number, default: 0 },
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;