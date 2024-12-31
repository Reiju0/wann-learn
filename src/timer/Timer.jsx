import { useState } from "react";
import "./Timer.css";
import { useRef } from "react";

export const Timer = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const timer = useRef(null);

  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    timer.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  };

  const handleStop = () => {
    clearInterval(timer.current);
  };

  const handleReset = () => {
    setNow(null);
    setStart(null);
  };

  const elapseTime = now - start;
  const seconds = Math.floor(elapseTime / 1000) % 60;
  const minutes = Math.floor(elapseTime / 1000 / 60) % 60;
  const hours = Math.floor(elapseTime / 1000 / 60 / 60);
  const display = `${hours} : ${minutes} : ${seconds}`;
  return (
    <>
      <h1 className="header">Timer Page</h1>
      <main className="content">
        <div className="card">
          <p className="card-header">Stopwatch App</p>
          <div className="timer">{display}</div>
          <div className="handle-button">
            <button onClick={handleStart} type="button" className="button-key">
              Start
            </button>
            <button onClick={handleReset} className="button-key">
              Reset
            </button>
            <button onClick={handleStop} className="button-key">
              Stop
            </button>
          </div>
        </div>
      </main>
      <h3 className="footer">Footer of Timer Page</h3>
    </>
  );
};
