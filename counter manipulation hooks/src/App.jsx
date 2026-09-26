import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCount] = useState(0);

  function addbuddy() {
    if (counter < 15) {
      setCount(counter + 1);
    }
  }

  function subsbuddy() {
    if (counter > 0) {
      setCount(counter - 1);
    }
  }

  return (
    <>
      <span>{counter}</span>
      <br />
      <button onClick={addbuddy}>add</button>
      <button onClick={subsbuddy}>substract</button>
    </>
  );
}

export default App;
