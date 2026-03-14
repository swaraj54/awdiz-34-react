import { Link, useNavigate } from "react-router";

function Navbar() {
  const router = useNavigate();

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
        <Link style={{ cursor: "pointer" }} to="/login">
          Login
        </Link>
        <Link style={{ cursor: "pointer" }} to="/register">
          Register
        </Link>
        <button>Logout</button>
      </div>
    </div>
  );
}

// const { title, role } = props;

export default Navbar;
