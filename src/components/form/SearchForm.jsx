import { useState } from "react";
export const SearchForm = () => {
  const [form, setForm] = useState("default value!");

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => setForm(e.target.value)}
          value={form}
          placeholder="Search..."
        />
        <button
          type="text"
          onClick={(e) => {
            e.preventDefault();
            console.log(form);
            alert(`You Search! ${form}`);
          }}>
          Search
        </button>
      </form>
    </>
  );
};

//primitive DOM Manipulation
export const Search = () => {
  return (
    <>
      <form>
        <input id="input-name" type="text" placeholder="add name..." />
        <button
          onClick={(e) => {
            e.preventDefault();
            const name = document.getElementById("input-name").value;
            document.getElementById("hello-text").innerText = `Hello ${name}`;
          }}
          type="submit">
          Tambah
        </button>
        <h1 id="hello-text">Hello React!</h1>
      </form>
    </>
  );
};
