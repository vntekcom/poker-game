import * as types from "../constants";

let initialState = {
  userProfile: {},
  userList: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER:
      const updateState = { ...state };
      updateState.userProfile = action.payload;
      return updateState;
  }
  return state;
};

export default userReducer;
