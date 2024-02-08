import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: 'noteSlicer',
    initialState: {
        notes: []
    },
    reducers:{
        incrementNote: (state, action) => {
            state.notes = action.payload
        },
        addNote: (state, action) => {
            state.notes = [...state.notes, action.payload]
        },
        deleteNote: (state, action) => {
            let tempArray = []
            for (let i = 0; i < state.notes.length; i++){
                if (state.notes[i].id === action.payload){
                    tempArray = [...state.notes.slice(0, i), ...state.notes.slice(i + 1)];
                    break;
                }
            }
            state.notes = tempArray;
        },
        updateNote: (state, action) => {
            for (let i = 0; i < state.notes.length; i++){
                if (state.notes[i].id === action.payload.id){
                    state.notes[i].title = action.payload.title
                    state.notes[i].note_body = action.payload.note_body
                }
            }
        },
    }
},)

export const { incrementNote, addNote, deleteNote, updateNote } = noteSlice.actions
export default noteSlice.reducer