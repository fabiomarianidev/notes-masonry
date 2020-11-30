import { useState, useEffect } from "react";

import ViewerColumn from "./ViewerColumn";

export default function NotesViewer(props) {
    const {notes, deleteNote, editNote} = props;

    // a function that return the number of columns based on mediaqueries
    // the breakpoints are the same as Bootstrap's
    const calculateNumberOfColumns = () => {
        if (window.matchMedia("(max-width: 575px)").matches) {
            return 1;
        } else if (window.matchMedia("(max-width: 767px)").matches) {
            return 2;
        } else if (window.matchMedia("(max-width: 991px)").matches) {
            return 3;
        } else if (window.matchMedia("(max-width: 1199px)").matches) {
            return 4;
        } else {
            return 5;
        }
    }

    const [numberOfColumns, setNumberofColumns] = useState(calculateNumberOfColumns());

    const updateNumberOfColumns = () => {
        setNumberofColumns(calculateNumberOfColumns());
    }

    useEffect( () => {
        window.addEventListener("resize", updateNumberOfColumns);
        return () => window.removeEventListener("resize", updateNumberOfColumns);
    })

    //initialize an array of columns
    const columns = new Array(numberOfColumns);

    for (let i=0; i<columns.length; i++) {
        columns[i]=[];
    }

    //create a note object for each note received from props,
    //and add it to a column, based on the modulus
    notes.forEach( (item,index) => {
        const newNote = { key: item.id, id: item.id, content: item.content }
        const position = index % numberOfColumns;
        columns[position].push(newNote);
    })

    // for each column, create a ViewerColumn component
    return(
        <section className="viewer__container">
            {columns.map((item,index) => <ViewerColumn key={index} notes={item} deleteNote={deleteNote} editNote={editNote} />)}
        </section>
    )

}