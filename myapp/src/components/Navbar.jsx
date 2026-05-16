import { Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import api from "../config/axiosConfig";
import toast from "react-hot-toast";

function Navbar() {
  const router = useNavigate();
  const userData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const Logout = async () => {
    try {
      const response = await api.get("/auth/logout");
      if (response.data.success) {
        toast.success("Logout successful");
        dispatch(logout());
      }
    } catch (error) {
      console.log(error);
      toast.error("Logout failed");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        border: "1px solid black",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "10%",
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link style={{ cursor: "pointer" }} to="/">
          Logo
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          width: "50%",
          border: "1px solid black",
          justifyContent: "space-around",
        }}
      >
        <h4 style={{ cursor: "pointer" }} onClick={() => router("/products")}>
          Men
        </h4>
        <h4 style={{ cursor: "pointer" }} onClick={() => router("/products")}>
          Women
        </h4>
        <h4 style={{ cursor: "pointer" }} onClick={() => router("/products")}>
          Kids
        </h4>
        <h4 style={{ cursor: "pointer" }} onClick={() => router("/products")}>
          Home
        </h4>
      </div>
      <div
        style={{
          display: "flex",
          width: "20%",
          border: "1px solid black",
          justifyContent: "space-around",
        }}
      >
        {userData && <h4>Hi, {userData?.name}</h4>}
        {userData && <h4 onClick={() => router("/profile")}>Profile</h4>}
        {userData && <button onClick={Logout}>Logout</button>}
        {!userData && (
          <Link style={{ cursor: "pointer" }} to="/login">
            Login
          </Link>
        )}
        {!userData && (
          <Link style={{ cursor: "pointer" }} to="/register">
            Register
          </Link>
        )}
      </div>
    </div>
  );
}

// const { title, role } = props;

export default Navbar;
