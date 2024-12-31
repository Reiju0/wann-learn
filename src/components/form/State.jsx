import { useState } from "react";

export const State = () => {
  const [count, setCounter] = useState(0);
  return (
    <>
      <h3>Counter: {count}</h3>
      <button
        onClick={() => {
          setCounter(count + 1);
        }}>
        Add
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}>
        Reset
      </button>
    </>
  );
};
