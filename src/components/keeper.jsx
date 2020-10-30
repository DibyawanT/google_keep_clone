import React, { useState } from "react";
import Card from "./card";
import CreateArea from "./create";

function Keeper() {
  const [notes, setNotes] = useState([]);

  function addNote(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((notes, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <CreateArea onAdd={addNote} />
      {notes.map((notes, index) => {
        return (
          <Card
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
}
export default Keeper;
