import React, { memo } from "react";

const ChildComponent = ({ handleClick2, counter2 }) => {
  console.log("Child component re-rendered..");
  return (
    <div>
      <h1>ChildComponent</h1>
      <h1>Counter 2 : {counter2}</h1>
      <button onClick={handleClick2}>+ for counter 2</button>
    </div>
  );
};

export default memo(ChildComponent);
