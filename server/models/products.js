const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  price: Number,
  quantity: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;