import React from "react";
import { useNavigate } from "react-router-dom";

export default function Viewer({ notes, onDeleteNote, activeNote }) {
  const navigate = useNavigate();

  return (
    <div id="note-container">
      <div id="view-tools">
        <div id="note-info">
          <h2>{activeNote.title}</h2>
          <input
            id="date"
            type="datetime-local"
            defaultValue={activeNote.date}
          />
        </div>
        <div id="note-buttons">
          <button onClick={() => navigate("/edit")}>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
}
