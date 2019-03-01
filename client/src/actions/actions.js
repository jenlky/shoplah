export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_USER = "FETCH_USER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_STORE = "UPDATE_STORE";
export const CALCULATE_PRICE = "CALCULATE_PRICE";

/*
Action objects:
UpdateStore -> CalculatePrice

Action creators:
AddToCart (product doesn't exist or qty === 0) -> cart controller -> UpdateStore -> CalculatePrice
RemoveFromCart (product doesn't exist or qty === 0) -> cart controller -> UpdateStore -> CalculatePrice
UpdateCart (product already exists or qty >= 1) -> cart controller -> UpdateStore -> CalculatePrice

UpdateCart will send the request to controller cart that has the logic to +1, -1 and change the quantity of the product.

FetchFromDatabase -> cart controller -> UpdateStore -> CalculatePrice
*/