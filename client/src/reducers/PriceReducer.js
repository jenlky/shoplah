import * as actionTypes from '../actions/actions';

const initialState = {
  totalPrice: 0
};

const PriceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CALCULATE_PRICE:
      let arr = [];
      console.log('updatedNum', action.num);

      action.num.map(num => {
        let index = num - 1;
        arr.push(action.qty[index] * action.cartItem[index].price);
      });

      if (arr.length > 0) {
        let total = arr.reduce((acc, currentVal) => acc + currentVal);
        return { 
          totalPrice: total 
        }
      } 

      return { 
        totalPrice: 0 
      }

    default: 
      return state;
  }
}

export default PriceReducer;