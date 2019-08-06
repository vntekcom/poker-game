import React from 'react';
import './card.css';
// https://static1.squarespace.com/static/5abd8db4620b85fa99f15131/5abe558a03ce64a18962e2c0/5bedaf484ae237dc804f820d/1551127485490/Card+Back+2.0+-+Poker+Size+-+Red_shw.png?format=750w
const Card = ({card}) => {
    return (
        <div>
            <img className="card" src={card.image} alt=""/>
        </div>
    );
}

export default Card;
