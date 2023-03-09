import React from "react";

export default function Sidebar({
  visibility,
  notes,
  onAddNote,
  activeNote,
  setActiveNote,
}) {
  return (
    <div id="sidebar-container" className={visibility ? "" : "hidden"}>
      <div id="sidebar-header">
        <h2>Notes</h2>
        <button onClick={onAddNote}>+</button>
      </div>
      <div id="sidebar-content">
        <p id="empty-notes">No notes yet</p>
        {notes.map((note) => (
          <div
            className={`sidebar-note ${note.id === activeNote && "active"}`}
            onClick={() => setActiveNote(note.id)}
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
