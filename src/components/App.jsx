import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
    // count++;

    console.log("I got clicked");
  }
  function decrease() {
    setCount(count - 1);
    // count++;

    console.log("I got clicked");
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={decrease}>-</button>
      <button onClick={increase}>+</button>
    </div>
  );
}

export default App;
