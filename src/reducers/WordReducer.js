import { createSlice } from "@reduxjs/toolkit";
import wordJson from "../assets/new_words.json";

const WordSlice = createSlice({
    name: "word",
    initialState: {
        currentWord: "test",
        words: [...wordJson.words]
    },
    reducers: {
        newWord(state, action) {
            state.currentWord = action.payload
        }
    }
})

export const {newWord} = WordSlice.actions
export default WordSlice