import React, { useContext } from "react";
import { CounterContext } from "../../contexts/counterContext";

const ContextCounter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter from Context reducer : {state.counter}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ContextCounter;
