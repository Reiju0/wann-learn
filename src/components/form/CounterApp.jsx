import { useState } from "react";
import { State } from "./State";

export const CounterApp = () => {
  const [show, setShow] = useState(true);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const handleChange = (e) => {
    setShow(e.target.checked);
  };

  const handleChange2 = (e) => {
    setShow2(e.target.checked);
  };

  const handleChange3 = (e) => {
    setShow3(e.target.checked);
  };

  return (
    <>
      <State />
      <div style={{ flexDirection: "row", display: "flex", gap: "10px" }}>
        <p>Tampilkan Counter</p>
        <input type="checkbox" checked={show} onChange={handleChange} />
      </div>

      {show ? (
        <div>
          <p>State 1</p>
          <State name="1" />
        </div>
      ) : (
        <div>
          <p>State 2 for Reset</p>
          <section>
            <State name="2" />
          </section>
        </div>
      )}

      <div>
        {/* resetted to */}
        <p>Counter Resetted!</p>
        {!show2 && <State name="3" />}
        {show2 && <State name="4" />}
        <input type="checkbox" checked={show2} onChange={handleChange2} />
      </div>

      {/* Immutable with key */}
      <div
        style={{
          backgroundColor: "lightblue",
          marginTop: "10px",
          padding: "10px",
        }}>
        <div style={{ flexDirection: "row", display: "flex", gap: "10px" }}>
          <p>Immutable with key</p>{" "}
          <input type="checkbox" checked={show3} onChange={handleChange3} />
        </div>
        {show3 ? <State name="5" key="5" /> : <State name="6" key="6" />}
      </div>
    </>
  );
};
