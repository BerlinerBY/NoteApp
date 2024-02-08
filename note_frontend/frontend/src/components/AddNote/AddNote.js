import { useState } from 'react';
import axios from 'axios';
import "./AddNote.css";
import { useDispatch, connect } from 'react-redux';
import { addNote } from '../../features/slices/noteSlicer';

function AddNote() {
    const [title, setTitle] = useState("");
    const [noteBody, setNoteBody] = useState("");
    const [isFormSubmitting, setIsFormSubmitting] = useState(false);
    const [hasInputError, setHasInputError] = useState(false);

    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (title.length > 0 || noteBody.length > 0) {
          setIsFormSubmitting(true);
          const API_URL = "http://localhost:8000";
          const { data } = await axios.post(`${API_URL}/note`, {
            title,
            note_body: noteBody,
          });
          dispatch(addNote(data));
        } else {
          setHasInputError(true);
        }
        setTitle("");
        setNoteBody("");
        setIsFormSubmitting(false);
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)} id="add-note-form">
            <input
                type="text"
                placeholder="Enter Title"
                id="title-input"
                className={hasInputError ? "input-error" : ""}
                value={title}
                onChange={(event) => {
                setHasInputError(false);
                setTitle(event.target.value);
                }}
            />
            <textarea
                placeholder="Enter Note"
                id="note-body-textarea"
                className={hasInputError ? "input-error" : ""}
                cols={30}
                rows={10}
                value={noteBody}
                onChange={(event) => {
                setHasInputError(false);
                setNoteBody(event.target.value);
                }}
            />
            <button id="add-note-btn" type="submit" disabled={isFormSubmitting}>
                {isFormSubmitting ? "..." : "Add Note"}
            </button>
        </form>
    )
}

export default AddNote;