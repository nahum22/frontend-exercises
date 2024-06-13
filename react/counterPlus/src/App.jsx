import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCounter from "./useCounter";
function App() {
  const [count, setCount] = useState(0);

  const { value, addOne, removeOne, double, divide } = useCounter(10);

  return (
    <>
      <div onClick={divide}>clich here to devide</div>
      <div onClick={double}>clich here to double</div>
      <div onClick={addOne}>clich here to add one</div>
      <div onClick={removeOne}>clich here to remove one</div>
      <div>{value}</div>;
    </>
  );
}

export default App;
