import { useState } from "react";

function Login() {
  const [userData, setUserData] = useState({ email: "", password: "" });
  console.log(userData, "userData");
  function handleChange(event) {
    // console.log(event.target.value, "value");
    // console.log(event.target.name, "name");
    setUserData({ ...userData, [event.target.name]: event.target.value });

    // const data = { name: "", location: "" };
    // data.name = "Awdiz 34";
    // data["name"] = "Awdiz 34";
    // {[event.target.name]} = event.target.value;
  }
  async function handleSubmit(event) {
    try {
      if(!userData?.email || !userData?.password ){
        return alert("All fields are required.")
      }
      event.preventDefault();
      // const response = await axios.post("/login", userData);
    //   console.log(response, "response");
    } catch (error) {
      console.log(error, "error");
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email - {userData.email}</label>
        <br />
        <input
          name="email"
          onChange={handleChange}
          required
          type="email"
          placeholder="abc@gmail.com"
        />{" "}
        <br />
        <label>Password - {userData.password}</label>
        <br />
        <input
          name="password"
          onChange={handleChange}
          required
          type="password"
          placeholder="Enter your password."
        />{" "}
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
