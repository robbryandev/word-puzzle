import { Component } from "react";
import { connect } from "react-redux";
import { newWord } from "../reducers/WordReducer";

export class Word extends Component {
    render() {
        const {dispatch} = this.props
        const NEW_WORD = () => {
            const randWord = this.props.word.words[Math.floor(Math.random() * this.props.word.words.length - 1)]
            dispatch(newWord(randWord))
        }
        return (
            <>
                <p>{this.props.word.currentWord}</p>
                <button onClick={ev => NEW_WORD()}>New Word</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        word: state.word
    }
}

export default connect(mapStateToProps)(Word)