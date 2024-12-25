import { useState } from "react";

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
