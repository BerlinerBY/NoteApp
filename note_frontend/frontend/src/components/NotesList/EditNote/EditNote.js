import './EditNote.css'
import { useState } from 'react';

function EditNote({note, setNoteView, handleUpdateNote}) {
    const [noteTitle, setNoteTitle] = useState(note.title);
    const [noteBody, setNoteBody] = useState(note.note_body);

    const sendData = () => {
        handleUpdateNote(note.id, noteTitle, noteBody);
        setNoteView(true);
    };

    return (
            <div key={note.id} className="note">
                <form className="note_body" 
                      id="update-note-form"
                      autoComplete="off">
                    <input 
                        type="text"
                        id="title-update"
                        defaultValue={note.title}
                        className="Title"
                        onChange={(event) => setNoteTitle(event.target.value)}
                    />
                    <textarea 
                        placeholder="Enter Note"
                        id="update-note-body-textarea"
                        defaultValue={note.note_body}
                        className="NoteBody"
                        onChange={(event) => setNoteBody(event.target.value)}
                    />
                    <div className="note-buttons-container">
                        <button
                            className="close-btn"
                            onClick={() => setNoteView(true)}
                            >
                            Close
                        </button>
                        <button className="save-btn" 
                            onClick={() => sendData()}
                            >
                            Save
                        </button>
                    </div>
                </form>
            </div>
    )
}

export default EditNote;