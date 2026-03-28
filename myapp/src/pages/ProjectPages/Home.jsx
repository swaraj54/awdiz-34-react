import { useContext } from "react";
import { CounterContext } from "../../contexts/counterContext";

function Home() {
  const { counter, setCounter } = useContext(CounterContext);
  return (
    <div>
      <h1>Counter from Context : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <button onClick={() => setCounter(1)}>Reset</button>
    </div>
  );
}

export default Home;
