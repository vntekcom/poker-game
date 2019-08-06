import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1 className="display-3" >Welcome!</h1>
            <Link className="btn btn-success" to="/game" >Play Game</Link>
        </div>
    );
};

export default Home;