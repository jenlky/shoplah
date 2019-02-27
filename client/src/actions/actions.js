export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CALCULATE_PRICE = "CALCULATE_PRICE";
export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const HANDLE_CLICK = "HANDLE_CLICK";
export const INPUT_QUANTITY = "INPUT_QUANTITY";
export const UPDATE_STORE = "UPDATE_STORE";

/*
Basic action objects:
AddToCart, RemoveFromCart, HandleClick & InputQuantity -> CalculatePrice

Action creators:
FetchFromDatabase -> dispatch UpdateStore -> in productsReducer, dispatch CalculatePrice
AddToDatabase -> AddToCart -> in productsReducer, dispatch CalculatePrice
RemoveFromDatabase -> RemoveFromCart -> in productsReducer, dispatch CalculatePrice
*/