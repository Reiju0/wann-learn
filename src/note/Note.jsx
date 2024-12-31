import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export const Note = ({ note, onDone }) => {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  let component;

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

  const handleChangeText = (e) => {
    dispatch({ type: "CHANGE_NOTE", ...note, text: e.target.value });
  };

  const handleChangeDone = (e) => {
    dispatch({ type: "CHANGE_NOTE", ...note, done: e.target.checked });
    setIsDone(e.target.checked);
  };

  const handleDelete = () => {
    onDone(note);
    dispatch({ type: "DELETE_NOTE", id: note.id });
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
