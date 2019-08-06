import * as types from "../constants/card";
import Axios from "axios";

export const actSaveCard = deck => {
  return {
    type: types.SAVE_CARD,
    deck
  };
};

export const fetchCards = () => {
  return dispatch => {
    Axios({
      method: "GET",
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
    })
      .then(res => {
        dispatch(actSaveCard(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const shuffleDesk = deckId => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deckId}/shuffle`
    })
      .then(res => {
        dispatch(actSaveCard(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const drawCards = (deckId) => {
  return dispatch => {
    Axios({
      method: "GET",
      url: `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=12`
    })
      .then(res => {
        dispatch(actDrawCards(res.data.cards));
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const actDrawCards = (cards) => {
    return {
        type: types.DRAW_CARD,
        cards
    }
}

export const actOnShuffle = (status) => {
    return{
        type: types.REL_CARD,
        status
    }
}
