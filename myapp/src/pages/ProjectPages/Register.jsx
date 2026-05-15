import { useState } from "react";
import api from "../../config/axiosConfig";
import { login } from "../../redux/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

function Register() {
  const router = useNavigate();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });
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
      if (
        !userData?.email ||
        !userData?.password ||
        !userData?.name ||
        !userData?.role
      ) {
        return toast.error("All fields are required.");
      }
      event.preventDefault();
      // const response = await axios.post("http://localhost:8000/login", userData);

      const response = await api.post("/auth/register", userData);

      console.log(response, "response");
      if (response?.data?.success) {
        toast.success(response?.data?.message);
        router("/login");
      }
    } catch (error) {
      console.log(error.response.data.message, "error");
      toast.error(error?.response?.data?.message);
    }
  }
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>Name - {userData.name}</label>
        <br />
        <input
          name="name"
          onChange={handleChange}
          required
          type="text"
          placeholder="Enter your name"
        />{" "}
        <br />
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
        <label>Select Role - {userData.role}</label>
        <br />
        <select name="role" onChange={handleChange} required>
          <option value="user">User</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <br />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default Register;
