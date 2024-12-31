import { useState } from "react";

export const TaskForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    onSubmit(input);
    setInput("");
  };

  return (
    <>
      <p>Halaman utama Task Pages!</p>
      <div>
        <h2>Daftar Task</h2>
        <p>Formulir untuk menambahkan task baru</p>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="input task.."
        />
        <button onClick={handleAdd}>Add</button>
        <br />
      </div>
    </>
  );
};
