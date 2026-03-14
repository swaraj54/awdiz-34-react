import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/ProjectPages/Home";
import Login from "./pages/ProjectPages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/ProjectPages/Products";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
