import * as types from "../constants/card";

let initialState = {};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_CARD:
      return action.deck;
    default:
      return state;
  }
};

export default cardReducer;
