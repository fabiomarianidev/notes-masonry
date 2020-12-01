import { useState } from "react";

import InputModal from "./InputModal";

export default function NoteCard (props) {

    const [ editMode, setEditMode ] = useState(false);
 
    const handleEditButton = () => {
        setEditMode(true);
    }

    const handleDelete = () => {
        props.deleteNote(props.id);
    }

    const handleConfirm = (newContent) => {
        props.editNote(props.id, newContent);
        setEditMode(false);
    }

    const handleClose = () => {
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
            <InputModal 
                active={editMode}
                content={props.content}
                handleConfirmButton={handleConfirm}
                handleCloseButton={handleClose}
            />
        </>
    )
} 