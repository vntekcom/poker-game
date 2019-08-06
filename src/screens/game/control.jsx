import React from "react";
import { connect } from "react-redux";
import { shuffleDesk, drawCards, actOnShuffle } from "../../store/actions/card";

const Control = ({ deck, onShuffleDeck, onDrawCards, actOnShuffle }) => {
  return (
    <div className="d-flex">
      <div>
        <button
          className="btn btn-success"
          onClick={() => {
            onShuffleDeck(deck.deck_id);
            actOnShuffle(true);
          }}
        >
          Trộn bài
        </button>
        <button
          className="btn btn-primary"
          onClick={() => {
            onDrawCards(deck.deck_id);
          }}
        >
          Phát bài
        </button>
        <button className="btn btn-warning">Lật bài</button>
      </div>
      <div className="d-flex">
        <div className="border px-3 text-center">
          <p>Player 1</p>
          <p>0</p>
        </div>
        <div className="border px-3 text-center">
          <p>Player 2</p>
          <p>0</p>
        </div>
        <div className="border px-3 text-center">
          <p>Player 3</p>
          <p>0</p>
        </div>
        <div className="border px-3 text-center">
          <p>Me</p>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    deck: state.deck
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onShuffleDeck: id => {
      dispatch(shuffleDesk(id));
    },
    onDrawCards: id => {
      dispatch(drawCards(id));
    },
    onRevealCards: (status) => {
      dispatch(actOnShuffle(status))
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Control);
