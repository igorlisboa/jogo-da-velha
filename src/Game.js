import {Component} from "react";
import React from "react";

import Board from './Board';

export default class Game extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/*status vai aqui*/}</div>
                    <ol>{/*TODO - lista de status*/}</ol>
                </div>
            </div>
        );
    }
}