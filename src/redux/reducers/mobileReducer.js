import { BUY_MOBILE } from "../actions/actionTypes.js";
const initialState = {
  numOfMobiles: 1000,
};

const mobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_MOBILE: //reducer
      return { numOfMobiles: state.numOfMobiles - 1 };
    default:
      return state;
  }
};
export default mobileReducer;
