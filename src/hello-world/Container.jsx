import "./HelloWorld.css";

const Container = ({ children }) => {
  return (
    <>
      <h1 className="header">Main Header / Wrapper</h1>
      <h2>Container of Content!</h2>
      {children}
      <footer>
        <p className="footer">© 2024 | Ridwan Abdullah</p>
      </footer>
    </>
  );
};

export default Container;
