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
        if (this.props.word.currentWord.length === 0) {
            NEW_WORD()
        }
        return (
            <>
                <p>{this.props.word.currentWord.toString()}</p>
                <p>Won: {this.props.word.won.toString()}</p>
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