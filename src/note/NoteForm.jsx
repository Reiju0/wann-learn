import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export const NoteForm = ({ onAddNote }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    onAddNote(text);
    setText("");
  };
  return (
    <>
      <p>Note Form Component</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="input note.."
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Tambah</button>
      </div>
    </>
  );
};

//implementasi useContext x useReducer
export const NoteFormContext = () => {
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAdd = () => {
    dispatch({ type: "ADD_NOTE", text: text });
    setText("");
  };
  return (
    <>
      <p>Note Form Component</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          placeholder="input note.."
          value={text}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>Tambah</button>
      </div>
    </>
  );
};
