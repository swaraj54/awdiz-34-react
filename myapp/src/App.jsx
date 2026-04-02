import { Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/ProjectPages/Home";
import Login from "./pages/ProjectPages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./pages/ProjectPages/Products";
import SingleProduct from "./pages/ProjectPages/SingleProduct";
import Day6 from "./pages/Day-6 useeffect/Day6";
import Day7 from "./pages/Day7 conditional rendering/Day7";
import Day8 from "./pages/Day-8 usememo usecallback/Day8";
import UseCallback from "./pages/Day-8 usememo usecallback/UseCallback";
import UseRef from "./pages/Day-9/UseRef";
import UseReducer from "./pages/Day-10/UseReducer";
import ContextCounter from "./pages/Day-11/ContextCounter";
import ReduxCounter from "./pages/Day-12/ReduxCounter";
import Register from "./pages/ProjectPages/Register";
import Todo from "./pages/Day-14/Todo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />

        <Route path="/day-6" element={<Day6 />} />
        <Route path="/day-7" element={<Day7 />} />
        <Route path="/day-8" element={<Day8 />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/context-counter" element={<ContextCounter />} />
        <Route path="/redux-counter" element={<ReduxCounter />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

// useState
// useEffect
// useParams
// useNavigate
// useMemo - hook
// memo() - method
// useCallback
// useRef
// useReducer
// useContext
// Context api - global data management - useReducer + useContext
// Redux - global data management = 80%
