import { useState } from "react";

function Day4() {
  const [message, setMessage] = useState("");
  function handleChange(event) {
    console.log("Function called");
    console.log(event.target.value, "event.target");
    setMessage(event.target.value);
  }
  function handleSubmit() {
    alert("Form submitted with message: " + message);
  }
  return (
    <div>
      <h1>Contact Us {message}</h1>
      <input type="text" onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Day4;
