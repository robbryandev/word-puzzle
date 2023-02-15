import { Component } from "react";
import { connect } from "react-redux";
import "../styles/WordInput.css";
import {addGuess, newGuess, checkWin} from "../reducers/WordReducer"

class WordInput extends Component {
    render() {
        const {dispatch} = this.props
        const handleSubmit = (event) => {
            event.preventDefault()
            const currentGuess = event.currentTarget.children[0].value;
            dispatch(newGuess(currentGuess))
            event.currentTarget.children[0].value = ""
            dispatch(addGuess())
            dispatch(checkWin())
        }
        return(
            <>
                <form onSubmit={handleSubmit} className="word-input">
                    <input type="text" pattern="[a-zA-Z]{6}" 
                    maxLength={"6"} className="input" 
                    spellCheck="false" required/>
                    {
                        this.props.word.guess < 6 ? (
                            <button type="submit" className="submit">Guess</button>
                        ) : null
                    }
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        word: state.word
    }
}

export default connect(mapStateToProps)(WordInput)