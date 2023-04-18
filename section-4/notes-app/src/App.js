import React from 'react'
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import {nanoid} from "nanoid"
import "react-mde/lib/styles/css/react-mde-all.css";
import './App.css';
import MoveElement from './utils'

function App() {
  const [notes, setNotes] = React.useState(
    JSON.parse(localStorage.getItem("notes")) || []
  )

  // setting initial state value with a function to stop it from running on every re-render.
  const [currentNoteId, setCurrentNoteId] = React.useState(() => (notes[0] && notes[0].id) || "")

  React.useEffect(() => {
      localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }
  
  function updateNote(text) {
    setNotes(oldNotes => oldNotes.map(oldNote => {
      return oldNote.id === currentNoteId
      ? { ...oldNote, body: text }
      : oldNote
    }));

    // sort notes by time edited
    const fromIndex = notes.findIndex(obj => obj.id === currentNoteId);
    setNotes(prevNotes => MoveElement(prevNotes, fromIndex, 0));
  }

  function deleteNote(event, noteId) {
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter(note => note.id !== noteId))
}
  
  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  return (
    <main>
      {
        notes.length > 0 
        ?
        <Split 
          sizes={[30, 70]} 
          direction="horizontal" 
          className="split"
        >
          <Sidebar
            notes={notes}
            currentNote={findCurrentNote()}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          
          {
            currentNoteId && 
            notes.length > 0 &&
            <Editor 
            currentNote={findCurrentNote()} 
            updateNote={updateNote} 
            />
          }
        </Split>
        :
        <div className="no-notes">
          <h1>You have no notes</h1>
          <button 
            className="first-note" 
            onClick={createNewNote}
          >
            Create new note
          </button>
        </div>
        
      }
    </main>
  );
}

export default App;
