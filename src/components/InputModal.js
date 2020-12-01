import React from "react";
import { useState, useEffect } from "react";

// Modal used for creating a new note and editing an existing one
// props are:
// active: tells if the modal is visible
// content: if it exists (component is called to edit), it contains the current note text
// handleConfirmButton: function that receives the new or updated string when the confirmation button is pressed. It must set "active" to false.
// handleCloseButton: function that handles the pressing of the close button. It must set "active" to false
// if props.content exists, the component is called to edit a note:
// 

export default function InputModal (props) {
    const [content, setContent] = useState();

    useEffect( () => {
        if (props.content) {
            setContent(props.content);
        } else {
            setContent("");
        }
    }, [props.content] )

    const handleTextareaChange = (event) => {
        setContent(event.target.value);
    }

    const handleConfirmButton = () => {
        if (content !== "") {
            props.handleConfirmButton(content);
        }
        setContent("");
    }

    const handleClearButton = () => {
        setContent("");
    }

    const handleCloseButton = () => {
        props.handleCloseButton();
    }

    return(
        <div className={props.active ? "modal is-active" : "modal"}>
        <div className="modal-background"></div>
        <div className="modal-content">
            <div className="card p-5">
                    <textarea className="textarea" rows="5" value={content} onChange={handleTextareaChange} />
                    <button className="button is-primary mt-3 mr-2" onClick={handleConfirmButton} >
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
    )
} 