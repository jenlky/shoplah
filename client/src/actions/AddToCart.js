
const AddToCart = (text) => {
  const ADD_TO_CART_OBJ = {
    type: ADD_TO_CART,
    text
  }

  return ADD_TO_CART_OBJ;
}

export default AddToCart;