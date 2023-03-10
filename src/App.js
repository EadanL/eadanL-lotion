import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";

import Layout from "./components/layout";
import Editor from "./components/editor";
import Viewer from "./components/viewer";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
    return notes.find(({ id }) => id === activeNote);
  };

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
          <Route
            path="/"
            element={
              <div id="note-container">
                <p id="empty-notes">Select a note, or create a new one.</p>
              </div>
            }
          ></Route>
          <Route
            path="/view"
            element={
              <Viewer
                notes={notes}
                onDeleteNote={onDeleteNote}
                activeNote={getActiveNote()}
              />
            }
          ></Route>
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
