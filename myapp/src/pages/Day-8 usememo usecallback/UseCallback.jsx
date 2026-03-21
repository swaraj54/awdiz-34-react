import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(12);
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <ChildComponent counter2={counter2} setCounter2={setCounter2} />
    </div>
  );
};

export default UseCallback;
