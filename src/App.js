import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppHeader from "./HeaderComponent";
import Body from "./Body";
import Footer from "./Footer";
import About from "./About";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";
import Login from "./Login";
import Cart from "./Component/cart";
// import RestaurantMenu from "./RestaurantMenu";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Error />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurant/:id" Component={RestaurantMenu} />
      </Routes>
    </Router>
  );
};

export default App;
