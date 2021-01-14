import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import CountLabel from "./components/countLabel";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(5);

  const updateCount = (count) => {
    setCount(count);
  };

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundColor: "red" }}>
        <CountLabel count={count}></CountLabel>
        <Counter count={count} onUpdateCounter={(count) => updateCount(count)}></Counter>
      </header>
    </div>
  );
}

export default App;
