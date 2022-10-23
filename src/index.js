import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
function Test() {
  const [count, setCounter] = useState(0);
  function decrementHandler() {
    setCounter((prevCount) => prevCount - 1);
  }
  function incrementHandler() {
    setCounter((prevCount) => prevCount + 1);
  }
  function handleReset() {
    setCounter((prevCount) => 0);
  }
  return (
    <div className="parent-container">
      <button className="button" onClick={decrementHandler}>
        -
      </button>
      <span className="counter-value">{count}</span>
      <button className="button" onClick={incrementHandler}>
        +
      </button>
      <button className="button" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test />);
