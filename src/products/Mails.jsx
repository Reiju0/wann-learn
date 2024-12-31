import { useEffect, useState } from "react";
import "./Products.css";

export const Mails = () => {
  const [mails, setMails] = useState([]);
  const [load, setLoad] = useState(false);

  const handleGet = () => {
    setLoad(true);
  };

  useEffect(() => {
    if (load) {
      fetch("/mails.json")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    }
  }, [load]);


  return (
    <div className="products-page">
      <header className="header">Disposisi Masuk Pages</header>
      <main className="main-page">
        <p className="title">List Disposisi Masuk</p>
        <div className="get-button">
          <button onClick={handleGet} type="submit" className="button">
            Dispo Masuk
          </button>
        </div>
        <div className="container-card">
          
        </div>
      </main>
      <footer className="footer">Products pages Footer</footer>
    </div>
  );
};
