import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Day3 from "./pages/Day-3 usestate/Day3.jsx";

function App() {
  const name = "Awdiz";
  const location = "Vashi";
  const headerStyle = {
    color: "blue",
  };
  const buttonStyle = {
    color: "red",
  };
  return (
    <>
      {/* <Navbar title="My App" role="admin" />
      <Navbar title="Another App" role="user" />
      <Navbar title="Yet Another App" role="guest" />
      <h1 style={headerStyle}>
        Welcome to {name}, {location}.
      </h1>
      <button style={buttonStyle}>Click me</button>
      <p style={{ color: "red", fontSize: "32px", backgroundColor: "yellow" }}>
        Welcome to {name}, {location}.
      </p>
      <button style={buttonStyle}>Click me</button>
      <button className="butttonStyle">Styling from external css file</button>
      <Footer />
      <Footer />
      <Footer /> */}
      <Day3 />
    </>
  );
}

export default App;
