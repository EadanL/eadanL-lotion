import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";

import Notes from "./components/notes";

import Layout from "./components/layout";
import Editor from "./components/editor";
import Viewer from "./components/viewer";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "Untitled",
      body: "",
      date: Date.now(),
    };

    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (idToDelete) => {
    setNotes(notes.filter((note) => note.id !== idToDelete));
  };

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote);
  };

  const { noteNumber } = useParams();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              notes={notes}
              onAddNote={onAddNote}
              activeNote={activeNote}
              setActiveNote={setActiveNote}
            />
          }
        >
          {/* <Route path="/edit" element={<Viewer />}></Route> */}
          <Route
            path="/"
            element={
              <div id="note-container">
                <p id="empty-notes">Select a note, or create a new one.</p>
              </div>
            }
          ></Route>
          <Route path="/:noteNumber"></Route>
          <Route
            path="/edit"
            element={
              <Editor
                notes={notes}
                onDeleteNote={onDeleteNote}
                activeNote={getActiveNote()}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
