import { useContext, useState } from "react";
import { Note } from "./Note";
import { NotesContext } from "./NoteContext.jsx";

export const NoteList = ({ notes, onChange, onDelete }) => {
  const [done, setDone] = useState([]);
  const handleDone = (note) => {
    setDone([...done, note]);
  };
  return (
    <>
      <p style={{ fontWeight: "bold" }}>Note List Component</p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note
              note={note}
              onChange={onChange}
              onDelete={onDelete}
              onDone={handleDone}
            />
          </li>
        ))}
      </ul>
      <br />
      <p style={{ fontWeight: "bold" }}>List Done</p>
      <ul>
        {done.map((note, i) => (
          <li key={i}>{note.text}</li>
        ))}
      </ul>
    </>
  );
};

export const NoteListContext = () => {
  const notes = useContext(NotesContext);
  const [done, setDone] = useState([]);
  const handleDone = (note) => {
    setDone([...done, note]);
  };
  return (
    <>
      <p style={{ fontWeight: "bold" }}>Note List Component</p>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Note note={note} onDone={handleDone} />
          </li>
        ))}
      </ul>
      <br />
      <p style={{ fontWeight: "bold" }}>List Done</p>
      <ul>
        {done.map((note, i) => (
          <li key={i}>{note.text}</li>
        ))}
      </ul>
    </>
  );
};
