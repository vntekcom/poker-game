import React, { useEffect } from "react";
import Player from "./player";
import { connect } from "react-redux";
import { fetchCards } from "../../store/actions/card";

const Main = ({ playerList, onSaveDeck, deck }) => {
  //   const [state, setState] = useState();

  useEffect(() => {
    onSaveDeck();
  }, []);

  //   const handleChangeState = () => {
  //       var count = Math.random();
  //       setState(count)
  //   }

  return (
    <div style={{ position: "relative", height: "600px" }}>
      {/* <button onClick={handleChangeState} >Change State</button> */}
      {playerList.map((player, i) => (
        <Player key={i} player={player} index={i + 1} />
      ))}
      <img
        src="https://static1.squarespace.com/static/5abd8db4620b85fa99f15131/5abe558a03ce64a18962e2c0/5bedaf484ae237dc804f820d/1551127485490/Card+Back+2.0+-+Poker+Size+-+Red_shw.png?format=750w"
        style={{
          position: "absolute",
          width: "100px",
          top: "50%",
          left: "50%",
          transform: "traslate(-50%,-50%"
        }}
      />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    playerList: state.players,
    deck: state.deck,
    status: state.status
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSaveDeck: () => {
      dispatch(fetchCards());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
