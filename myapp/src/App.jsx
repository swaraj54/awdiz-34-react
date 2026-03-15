import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/ProjectPages/Home";
import Login from "./pages/ProjectPages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/ProjectPages/Products";
import SingleProduct from "./pages/ProjectPages/SingleProduct";
import Day6 from "./pages/Day-6 useeffect/Day6";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />

        <Route path="/day-6" element={<Day6 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
