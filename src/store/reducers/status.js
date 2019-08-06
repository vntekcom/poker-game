import * as types from "../constants/card";

let initialState = {
  revealStatus: false,
  drawStatus: false
};

const statusReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REL_CARD:
      state.revealStatus = action.status;

    default:
      return state;
  }
};

export default statusReducer;
