import React from "react";
import Card from "./card";

const Player = ({ player, index }) => {
  return (
    <div className={`player-${index}`}>
      <p className="lead"> {player.username} </p>
      <main className="d-flex">
        {player.cards.map((card, i) => (
          <Card key={i} card={card} />
        ))}
      </main>
    </div>
  );
};

export default Player;
