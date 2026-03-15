import React, { useEffect, useState } from "react";

const Day6 = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  useEffect(() => {
    console.log("useEffect called");
  });
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, []);
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, [counter]);
  //   useEffect(() => {
  //     console.log("useEffect called");
  //   }, [counter, counter2]);
  return (
    <div>
      <h1>Counter 1 : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter 1
      </button>
      <h1>Counter 2: {counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>
        Increment Counter 2
      </button>
    </div>
  );
};

export default Day6;
