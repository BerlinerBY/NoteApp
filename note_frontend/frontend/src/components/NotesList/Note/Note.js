import EditNote from "../EditNote/EditNote";
import { useState } from "react";

function Note({note, handleDeleteNote, handleUpdateNote}) {
    const [noteView, setNoteView] = useState(true);
    const note_object = note;
    const renderFunction = (note) => {
        switch (noteView) {
            case true:
                return (
                    <div key={note.id} className="note">
                        <div className="note_body">
                            <div className="Title">
                                <h3>{note.title}</h3>
                            </div>
                            <div className="NoteBody">
                                <p>{note.note_body}</p>
                            </div>
                            <div className="note-buttons-container">
                                <button
                                    className="neutral-btn"
                                    onClick={() => setNoteView(false)}
                                    >
                                    Edit
                                </button>
                                <button className="delete-btn" 
                                    onClick={() => handleDeleteNote(note.id)}
                                    >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )
            case false:
                return <EditNote 
                        note={note}
                        setNoteView={setNoteView}
                        handleUpdateNote={handleUpdateNote}
                    />
            default:
                return <></>
        }
    };


    return (
            <>
                {renderFunction(note_object)}
            </>
    )
}

export default Note;