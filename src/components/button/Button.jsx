import "./Button.css";

export const AlertButton = ({ text, message }) => {
  // function to handle button click on scope component
  const handleClick = (e) => {
    console.info(e);
    alert(message);
  };
  return (
    <button className="alertButton" onClick={handleClick}>
      {text}
    </button>
  );
};

export const MyButton = ({ text, onHit }) => {
  return (
    <>
      {/* props on event handler */}
      <button className="myButton" onClick={onHit}>
        {text}
      </button>
    </>
  );
};

export const Toolbar = ({ onClick }) => {
  return (
    <>
      <div className="toolbar" onClick={onClick}>
        <button onClick={onClick}>First</button>
        <button onClick={onClick}>Second</button>
      </div>
    </>
  );
};

export const SaveToolbar = ({ onClick }) => {
  return (
    <>
      <div className="saveToolbar" onClick={onClick}>
        <button onClick={onClick}>First</button>
        <button onClick={onClick}>Second</button>
        <p className="paragraph">Save Toolbar</p>
      </div>
    </>
  );
};
