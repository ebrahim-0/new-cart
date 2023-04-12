import AppNavbar from "./components/AppNavbar";
import Cart from "./components/Cart";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
