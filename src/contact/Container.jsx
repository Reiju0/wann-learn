import "./Container.css";

const Container = ({ children }) => {
  return (
    <>
      <h1 className="header">Contact Page</h1>
      <main>{children}</main>
      <h4 className="footer">Footer</h4>
    </>
  );
};

export default Container;
