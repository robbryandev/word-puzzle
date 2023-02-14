import { Component } from "react";
import "../styles/Board.css"
import Word from "./Word";
import WordInput from "./WordInput";

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <WordInput/>
                <Word/>
            </div>
        )
    }
}