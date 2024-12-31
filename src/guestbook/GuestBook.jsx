import { useRef } from "react";
import "./GuestBook.css";
import { useState } from "react";

export const GuestBook = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guestBook, setGuestBook] = useState([]);
  const inputName = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setMessage("");
    setGuestBook([...guestBook, name]);
    inputName.current.focus();
    alert(`Successfully Added! Nama: ${name} Pesan: ${message}`);
  };

  return (
    <>
      <h1 className="header">GuestBook Pages</h1>
      <main className="content">
        <div className="card">
          <p className="card-header">GuestBook Form</p>
          <div className="display">
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  ref={inputName}
                  style={{
                    marginLeft: "25px",
                    width: "100%",
                    fontFamily: "sans-serif",
                  }}
                  type="text"
                  name="name"
                  value={name.toUpperCase()}
                  onChange={(e) => setName(e.target.value.toUpperCase())}
                  id="name"
                  placeholder="masukkan nama"
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  style={{ width: "100%", fontFamily: "sans-serif" }}
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="masukkan pesan"
                  required
                />
              </div>
              <div>
                <button
                  className="submit-button"
                  type="submit"
                  onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="card">
          <p className="card-header">GuestBook List</p>
          <div className="display">
            <ol>
              {guestBook.map((guest, i) => (
                <li key={i}>{guest}</li>
              ))}
            </ol>
          </div>
        </div>
      </main>
      <h3 className="footer">Footer of GuestBook Page</h3>
    </>
  );
};
