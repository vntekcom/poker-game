import React, { Component,Fragment } from 'react';
import Control from './control';
import Main from './main';
import './index.css'

class Game extends Component {
    render() {
        return (
            <Fragment>
                <Control />
                <Main />
            </Fragment>
        );
    }
}

export default Game;
