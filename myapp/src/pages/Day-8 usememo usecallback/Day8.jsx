import React, { useMemo, useState } from "react";

const Day8 = () => {
  const [counter, setCounter] = useState(1);
  console.log("Component rerednered.");
  const [counter2, setCounter2] = useState(12);

  //   const output = lengthyOperation(counter);
  const output = useMemo(() => lengthyOperation(counter), [counter]);
  //   useMemo - it cache value

  return (
    <div>
      <h1>Lengthy Operation value : {output}</h1>
      <h1>counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>+ for counter 2</button>
    </div>
  );
};

function lengthyOperation(counter) {
  for (let i = 0; i < 1000000000; i++) {
    counter++;
  }
  console.log("inside lengthy operation", counter);
  return counter;
}

export default Day8;
