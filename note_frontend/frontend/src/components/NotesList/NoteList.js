import { connect, useDispatch } from "react-redux";
import './NoteList.css'
import { deleteNote, updateNote } from "../../features/slices/noteSlicer";
import axios from 'axios';
import Note from "./Note/Note";


function NoteList({ notesFromStore }) {
    const noteList = notesFromStore;
    const dispatch = useDispatch(); 

    const handleDeleteNote = async (noteID) => {
        const API_URL = "http://localhost:8000";
        await axios.delete(`${API_URL}/note/${noteID}`)
            .then((response) => {
                dispatch(deleteNote(noteID));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleUpdateNote = async (noteID, title, note_body) => {
        const API_URL = "http://localhost:8000";
        const data = {
            id: noteID,
            title: title,
            note_body: note_body,
        };
        await axios.put(`${API_URL}/note/${noteID}`, 
                        data, 
                        {headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json',
                          },})
            .then((response) => {
                dispatch(updateNote(data));
            })
            .catch((error) => {
                console.log(data);
                console.error(error);
            });
    };

    return (
        <div className="noteList">
            <div className="noteListBody">
                {noteList.length > 0 && (
                    <div>
                        {noteList.map(note => (
                            <div key={note.id}>
                                <Note 
                                    note={note}
                                    handleDeleteNote={handleDeleteNote}
                                    handleUpdateNote={handleUpdateNote} />
                            </div>

                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

function displayStateToProps(state) {
    return {
        notesFromStore: state.noter.notes,
    };
}

export default connect(displayStateToProps)(NoteList);