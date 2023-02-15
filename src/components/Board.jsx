import { Component } from "react";
import "../styles/Board.css"
import Word from "./Word";
import WordInput from "./WordInput";
import GuessList from "./GuessList";

export default class Board extends Component {
    render() {
        return (
            <div className="board">
                <div className="parent">
                    <WordInput/>
                    <GuessList/>
                    <Word/>
                </div>
            </div>
        )
    }
}