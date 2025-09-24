import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <h1 className="title">Counter App</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button className="btn increment" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button className="btn decrement" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="btn reset" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
