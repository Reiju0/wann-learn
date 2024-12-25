import { useState } from "react";

export const Note = ({ note, onChange, onDelete, onDone }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  let component;

  const handleChangeText = (e) => {
    const newNote = { ...note, text: e.target.value };
    onChange(newNote);
  };
  if (isEditing) {
    component = (
      <>
        <input type="text" value={note.text} onChange={handleChangeText} />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    component = (
      <>
        {note.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  if (isDone) {
    component = (
      <>
        <strike>{note.text}</strike>
      </>
    );
  }

  const handleChangeDone = (e) => {
    const newNote = { ...note, done: e.target.checked };

    setIsDone(e.target.checked);
    onChange(newNote);
  };

  const handleDelete = () => {
    onDone(note);
    onDelete(note);
  };

  return (
    <>
      <label style={{ display: "flex", gap: "10px" }}>
        <input
          type="checkbox"
          checked={note.done}
          onChange={handleChangeDone}
        />
        {component}
        {isDone ? <button onClick={handleDelete}>Delete</button> : ""}
      </label>
    </>
  );
};
