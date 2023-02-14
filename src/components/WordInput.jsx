import { Component } from "react";
import "../styles/WordInput.css"

export default class WordInput extends Component {
    handleSubmit(event) {
        event.preventDefault()
    }
    render() {
        return(
            <div className="parent">
                <form onSubmit={this.handleSubmit} className="word-input">
                    <input type="text" pattern="[a-zA-Z]{6}" 
                    maxLength={"6"} className="input" 
                    spellCheck="false" required/>
                    <button type="submit" className="submit">Guess</button>
                </form>
            </div>
        )
    }
}