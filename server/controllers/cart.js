const Users = require('../models/users');

// if user is logged in, retrieve all cart products from database
const getAllProducts = (req, res) => {
  return Users.find(products)
              .then(data => res.status(200).json(data))
              .catch(err => res.status(400).json({ err }));
}

// if user is logged in n adds a product, add the product in database
const addOneProduct = (req, res) => {
  const { product } = req.body;
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  const userId = req.user._id;
   // how to find productId?
  const productId = req.body._id;

  // Check if the product already exists in the user
  return Users.findById(userId)
              .then(() => {
                if (!products) {
                  // or Users.create(product)
                  return Users.products.create(productObj);
                }
              })
              .then(productObj => {
                if (!productObj.id.include(product.id)) {
                  productObj.id.push(product.id);
                  productObj.qty.push(product.qty);
                  User.save(error => {
                    if (error) return handleError(error);
                    console.log('addOneProduct successful!');
                  });
                  return productObj;
                } else {
                  throw new Error('Product already exist');
                }            
              })
              .then(addedProduct => res.status(200).json(addedProduct))
              .catch(error => res.status(400).json(error));
};

// if user is logged in n changes the qty of a product, update the qty in database
const updateOneProduct = (req, res) => {
  const { product } = req.body;
  if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
  const userId = req.user._id;
  const productId = req.body._id;

  return Users.findById(userId)
              .findById(productId)
              .then()
}

// if user is logged in n deletes a product, remove the product in database
const deleteOneProduct = (req, res) => {
  return Users.find(products)
              .then()
}

module.exports = {
  getAllProducts,
  addOneProduct,
  updateOneProduct,
  deleteOneProduct
}