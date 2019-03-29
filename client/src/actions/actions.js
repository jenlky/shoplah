export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY"; // when product already exists or qty >= 1, +1/-1 or change qty of product
export const UPDATE_STORE = "UPDATE_STORE"; // FetchFromDatabase dispatch(UpdateStore())
export const TOGGLE_POPUP = "TOGGLE_POPUP";
export const CALCULATE_PRICE = "CALCULATE_PRICE";

// 1. Ensure UpdateCart update database
// 2. Add Shopee's "Item has been added to your shopping cart"
// 3. (Add Undo action for when dispatching to Redux fail)

/*
Action objects:
UpdateStore -> CalculatePrice
userReducer (if logged out) -> UpdateStore -> CalculatePrice

Action creators:
AddProduct (product doesn't exist or qty === 0) -> AddToCart -> CalculatePrice -> cart controller
RemoveProduct (product doesn't exist or qty === 0) -> RemoveFromCart -> CalculatePrice -> cart controller
UpdateCart (product already exists or qty >= 1) -> UpdateQuantity -> CalculatePrice -> cart controller

UpdateCart: +1, -1 and change the quantity of the product.

FetchFromDatabase -> cart controller -> UpdateStore -> CalculatePrice
*/