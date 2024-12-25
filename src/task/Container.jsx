import "./Container.css";

const Container = ({ children }) => {
  return (
    <>
      <header className="header">Task Pages</header>
      <main>{children}</main>
      <footer className="footer">Footer of Task Pages</footer>
    </>
  );
};

export default Container;
