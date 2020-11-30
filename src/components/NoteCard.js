import { useState } from "react";

export default function NoteCard (props) {

    const [ editMode, setEditMode ] = useState(false);
    const [ newNoteContent, setNewNoteContent ] = useState(props.content);
    
    const handleDelete = () => {
        props.deleteNote(props.id);
        console.log(props.id)
    }

    const handleEditButton = () => {
        setNewNoteContent(props.content);
        setEditMode(true);
    }

    const handleTextareaChange = (event) => {
        setNewNoteContent(event.target.value);
    }

    const handleAddButton = () => {
        if (newNoteContent !== "") {
            props.editNote(props.id, newNoteContent);
            setEditMode(false);
        }
    }

    const handleClearButton = () => {
        setNewNoteContent("");
    }

    const handleCloseButton = () => {
        setEditMode(false);
    }

    return(
        <>
        <div className="card notecard__container">
            <div className="card-content">
                <div className="content notecard__content">
                    {props.content}
                </div>
                <button className="delete is-medium has-background-danger notecard__button" onClick={handleDelete}/>
                <button className="button is-info is-small" onClick={handleEditButton}><i className="fas fa-edit"/></button>
            </div>
        </div>
        <div className={editMode ? "modal is-active" : "modal"}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="card p-5">
                        <textarea className="textarea" rows="5" value={newNoteContent} onChange={handleTextareaChange} />
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
        </>
    )
} 