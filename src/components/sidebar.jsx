import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Sidebar({
  id,
  visibility,
  notes,
  onAddNote,
  activeNote,
  setActiveNote,
}) {
  const navigate = useNavigate();

  const onNoteClick = (note) => {
    setActiveNote(note);
    navigate("/view");
  };

  const onPlusClick = () => {
    onAddNote();
    navigate("/edit");
  };

  return (
    <div id="sidebar-container" className={visibility ? "" : "hidden"}>
      <div id="sidebar-header">
        <h2>Notes</h2>
        <button onClick={onPlusClick}>+</button>
      </div>
      <div id="sidebar-content">
        {notes.map((note) => (
          <div
            className={`sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => onNoteClick(note.id)}
          >
            <div id="sidebar-note-title">
              <h3>{note.title}</h3>
              <small>
                {new Date(note.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  hour: "numeric",
                  minute: "numeric",
                })}
              </small>
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
