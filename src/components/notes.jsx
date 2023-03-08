import React from 'react'

export default function Notes() {
    
    getAllNotes = () => {...}

    saveNote = (noteToSave) => {
        const notes = Notes.getAllNotes();
        const existing = notes.find(note => note.id ==noteToSave.id);

        if (existing) {
            existing.title = noteToSave.title;
            existing.body = noteToSave.body;
            existing.updated = new Date().toISOString();
        } else {
            noteToSave.id = math.floor(Math.random() * 100000);
            noteToSave.updated = new Date().toISOString;
            notes.push(noteToSave);
        }


        localStorage.setItem( "notesapp-note", JSON.stringify(notes));
    }


    deleteNote = (id) => {
        const notes = notes.getAllNotes();
        const newNotes = notes.filter(note => note.id != id);

        localStorage.setItem("notesapp-notes", JSON.stringify(newNotes));
    }
 
    /* In example video main.js */
    /* import Notes from ""./components/notes" 
    
    Notes.saveNote({
        id
    })
    */



}    
