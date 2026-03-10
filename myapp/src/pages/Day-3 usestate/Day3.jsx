import { useState } from "react";

function Day3() {
  const [counter, setCounter] = useState(1);
  console.log(counter, "coutner");
  function Increment() {
    if (counter <= 9) {
      setCounter(counter + 1);
    } else {
      alert("Counter cannot be greater than 10");
    }
  }
  function Decrement() {
    if (counter > 1) {
      //counter == 2
      setCounter(counter - 1);
    } else {
      alert("Counter cannot be less than 1");
    }
  }
  function Reset() {
    setCounter(1);
  }
  return (
    <div>
      <h1>Counter - {counter}</h1>
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default Day3;
