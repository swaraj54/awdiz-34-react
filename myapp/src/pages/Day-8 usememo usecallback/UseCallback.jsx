import React, { useCallback, useState } from "react";
import ChildComponent from "./ChildComponent";

const UseCallback = () => {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(12);

  // const handleClick2 = () => {
  //   setCounter2(counter2 + 1);
  // };

  const handleClick2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <ChildComponent
        handleClick2={handleClick2}
        counter2={counter2}
        // setCounter2={setCounter2}
      />
    </div>
  );
};

export default UseCallback;
