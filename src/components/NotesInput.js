import { useState } from "react";
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
            <button className="input__addButton button is-primary is-large" onClick={()=>{setShowModal(true)}}><i className="fas fa-plus"/></button>
            <InputModal 
                active={showModal}
                handleConfirmButton={handleAdd}
                handleCloseButton={handleClose}
            />
        </section>
    )
}