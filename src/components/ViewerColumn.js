import React from "react";
import NoteCard from "./NoteCard";

export default function ViewerColumn (props) {
    return (
        <div className="viewerColumn__container">
            {props.notes.map( item => 
                <NoteCard 
                    key={item.id} 
                    id={item.id} 
                    content={item.content} 
                    deleteNote={props.deleteNote} 
                    editNote={props.editNote}
                />
            )}
        </div>
    )
}