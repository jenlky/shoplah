const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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

const Users = mongoose.model('User', userSchema);

module.exports = Users;