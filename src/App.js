import { useState } from "react";

import Header from "./components/Header";
import NotesInput from "./components/NotesInput";
import NotesViewer from "./components/NotesViewer";

import './App.scss';

import savedNotes from './notes.json';

function App() {
  const [notes, setNotes] = useState(savedNotes);

  const generateRandomId = () => {
    let randomNumber = Math.floor(Math.random() * 100) + notes.length;
    return (randomNumber);
  }

  const createNewNote = (newNoteContent) => {
    const newNotesItem = {
      id: generateRandomId(),
      content: newNoteContent
    }

    setNotes( notes.concat(newNotesItem) );
  } 

  const deleteNote = (idToDelete) => {
    const updatedNotes = notes.filter( item => item.id !== idToDelete);
    setNotes(updatedNotes);
  }

  const editNote = (id, newContent) => {
    const newNotes = [...notes];
    newNotes.forEach(item => {
      if (item.id === id) {
        item.content = newContent;
      }
    })
    setNotes(newNotes);
  }

  return (
    <div className="App container">
      <Header />
      <NotesInput createNewNote={createNewNote}/>
      <NotesViewer notes={notes} deleteNote={deleteNote} editNote={editNote}/>
    </div>
  );
}

export default App;
