import React from "react";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import "./styles.css";

const App = () => (
  <BrowserRouter>
    <nav className="navbar">
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/products" className="navLink">
        Products
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/products/:productId" element={<ProductDetails/>}></Route>
    </Routes>
  </BrowserRouter>
);

export default App;
