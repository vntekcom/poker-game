import * as types from "../constants/card";

let initialState = [
  {
    username: "Player 1",
    totalpoint: 0,
    cards: []
  },
  {
    username: "Player 1",
    totalpoint: 0,
    cards: []
  },
  {
    username: "Player 1",
    totalpoint: 0,
    cards: []
  },
  {
    username: JSON.parse(localStorage.getItem("userlogin")).TaiKhoan,
    totalpoint: 0,
    cards: []
  }
];

const checkSpeacialCase = cards => {

  
};

const countPoint = card => {
  var special = ["KING", "QUEEN", "JACK"];
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.DRAW_CARD: {
      for (let i in action.cards) {
        let index = i % state.length;
        state[index].cards.push(action.cards[i]);
      }
      return [...state];
    }
    default:
      return state;
  }
};

export default playerReducer;
