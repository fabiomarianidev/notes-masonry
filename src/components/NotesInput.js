import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import InputModal from "./InputModal";

export default function NotesInput (props) {
    const [ showModal, setShowModal ] = useState(false);

    const handleAdd = (content) => {
        props.createNewNote(content);
        setShowModal(false);
    }

    const handleClose = () => {
        setShowModal(false);
    }

    return(
        <section>
            <button className="input__addButton button is-primary is-large" onClick={()=>{setShowModal(true)}}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <InputModal 
                active={showModal}
                handleConfirmButton={handleAdd}
                handleCloseButton={handleClose}
            />
        </section>
    )
}