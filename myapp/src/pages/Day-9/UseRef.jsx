import React, { useRef, useState } from "react";

const UseRef = () => {
  const [counter, setCounter] = useState(1);
  const [name, setName] = useState("");
  console.log("Component re-render..");

  const data = useRef(8);
  console.log(data, "data");
  
  // const myObj = {name :"awdiz"}
  // myObj.name = "My name"
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <h1>Name : {name}</h1>
      <input onChange={(event) => setName(event.target.value)} />
      <h1>Ref counter : {data.current}</h1>
      <button onClick={() => (data.current = data.current + 1)}>
        + for ref counter
      </button>
    </div>
  );
};

export default UseRef;
