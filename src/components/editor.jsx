import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Editor({ notes, onDeleteNote, activeNote }) {
  let { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState(() => {
    const saved = localStorage.getItem("title");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  function getDate() {
    const utcDate = new Date();
    const offset = utcDate.getTimezoneOffset();
    utcDate.setMinutes(utcDate.getMinutes() - Math.abs(offset));

    const date = utcDate.toISOString().slice(0, 16);
    return date;
  }

  useEffect(() => {
    localStorage.setItem("title", JSON.stringify(title));
  }, [title]);

  return (
    <div id="note-container">
      {notes.map((note) => (
        <div>
          <div id="note-head-container">
            <div id="note-info">
              <input
                type="text"
                id="note-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Untitled"
              />
              <input id="date" type="datetime-local" defaultValue={getDate()} />
            </div>
            <div id="note-buttons">
              <button id="save-button" onClick={() => navigate("/view")}>
                Save
              </button>
              <button id="delete-button" onClick={() => onDeleteNote(note.id)}>
                Delete
              </button>
            </div>
          </div>
          <div id="text-editor">
            <ReactQuill theme="snow" placeholder="Your note here" />
          </div>
        </div>
      ))}
    </div>
  );
}
