import { useState } from "react";

export default function NotesInput (props) {
    const [ showModal, setShowModal ] = useState(false);
    const [ noteContent, setNoteContent ] = useState("");

    const handleTextareaChange = (event) => {
        setNoteContent(event.target.value);
    }

    const handleAddButton = () => {
        if(noteContent!=="") {
            props.createNewNote(noteContent);
            setNoteContent(""); //clears the textarea
            handleCloseButton(); //closes the dialog modal
        }
    }

    const handleClearButton = () => {
        setNoteContent(""); //clears the textarea
    }

    const handleCloseButton = () => {
        setShowModal(false);
    }

    return(
        <section>
            <button className="input__addButton button is-primary is-large" onClick={()=>{setShowModal(true)}}><i className="fas fa-plus"/></button>
            <div className={showModal ? "modal is-active" : "modal"}>
                <div className="modal-background"></div>
                <div className="modal-content">
                    <div className="card p-5">
                            <textarea className="textarea" rows="5" value={noteContent} onChange={handleTextareaChange} />
                            <button className="button is-primary mt-3 mr-2" onClick={handleAddButton} >
                                <i className="fas fa-check" />
                            </button>
                            <button className="button is-info mx-2 mt-3" onClick={handleClearButton} >
                                <i className="fas fa-eraser" />
                            </button>
                            <button className="button is-danger mx-2 mt-3" onClick={handleCloseButton}>
                                <i className="fas fa-times" />
                            </button>
                    </div>
                </div>
            </div>
        </section>
    )
}