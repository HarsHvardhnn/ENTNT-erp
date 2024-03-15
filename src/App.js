// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import Order from "./Components/Order";
import "./App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <div>
          <NavBar />
        </div>

   
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
