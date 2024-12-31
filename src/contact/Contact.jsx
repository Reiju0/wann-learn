import { useState } from "react";
import { useImmer } from "use-immer";

export const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const handleName = (e) => {
    setContact({ ...contact, name: e.target.value });
  };

  const handleEmail = (e) => {
    setContact({ ...contact, email: e.target.value });
  };

  return (
    <>
      <p style={{ textAlign: "center", backgroundColor: "aqua" }}>
        Halaman isi dari contact page!
      </p>
      <form style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <input
          placeholder="input name.."
          type="text"
          value={contact.name}
          onChange={handleName}
        />
        <input
          placeholder="input email.."
          type="email"
          value={contact.email}
          onChange={handleEmail}
        />
      </form>
      <div>
        <p>Nama: {contact.name}</p>
        <p>Email: {contact.email}</p>
      </div>
    </>
  );
};

export const ImmerContact = () => {
  const [contact, setContact] = useImmer({
    name: "",
    email: "",
  });
  const handleEmail = (e) => {
    setContact((contact) => {
      contact.email = e.target.value;
    });
  };

  const handleName = (e) => {
    setContact((contact) => {
      contact.name = e.target.value;
    });
  };

  return (
    <>
      <p>Test Immer!</p>
      {/* digunakan untuk menggantikan spread syntax untuk menghidari nested object yang kompleks  */}
      <form style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <input
          placeholder="input name.."
          type="text"
          value={contact.name}
          onChange={handleName}
        />
        <input
          placeholder="input email.."
          type="email"
          value={contact.email}
          onChange={handleEmail}
        />
      </form>
      <div>
        <p>Nama: {contact.name}</p>
        <p>Email: {contact.email}</p>
      </div>
    </>
  );
};
