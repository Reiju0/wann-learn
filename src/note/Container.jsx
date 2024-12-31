import "./Style.css";

const Container = ({ children }) => {
  return (
    <>
      <header className="header">Note Pages</header>
      <main>{children}</main>
      <footer className="footer">&copy; 2024</footer>
    </>
  );
};

export default Container;
