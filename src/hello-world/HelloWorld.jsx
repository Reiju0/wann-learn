export const Header = ({ text = "default props!" }) => {
  return (
    <>
      {/* embed style */}
      <h1
        style={{
          backgroundColor: "blue",
          color: "white",
          textAlign: "center",
        }}>
        {text.toUpperCase()}
      </h1>
    </>
  );
};

export const MainPage = ({
  content = "default content!",
  text = "default text!",
}) => {
  const isi = "Yuk bareng-barang belajar React dari fondasi!";
  const style = {
    backgroundColor: "lightblue",
    color: "black",
    textAlign: "justify",
  };
  return (
    // style from object
    <>
      <p className="content">
        Main Page insert Spread Syntax {content} dan {text}
      </p>
      <p style={style}>{isi.toLowerCase()}</p>
    </>
  );
};

const HelloWorld = () => {
  const props = {
    content: "Hello React",
    text: "Hello World",
  };
  return (
    <div>
      <Header text={props.text} />
      {/* spread syntaxt -> mengirimkan seluruh props */}
      <MainPage {...props} />
    </div>
  );
};

export default HelloWorld;
