import React, { useState, useContext } from "react";
import "./App.css";
import { Link } from "react-router-dom";

import useOnline from "./Component/utils/useOnline";
import UserContext from "./Component/utils/UserContext";
import { useSelector } from "react-redux";
import { FaCartPlus } from "react-icons/fa";
const Title = () => {
  return (
    <div className="headerContent">
      <a href="/">
        <img
          className="h-30 m-2 p-2"
          alt="img"
          src="https://cdn.octopix.in/uploads/company-logo/2020/11/19/food-villa-pSJVhwoN8KxgwV9jtuB1MlosJ0ejoKfiBiVO1jJPLM61shyarbxVvjIFy3DVpbUML8eBxcUo7BOWXQcd-350x350.jpg"
        />
      </a>
    </div>
  );
};
const AppHeader = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const [login, setLogin] = useState(true);
  const isOnline = useOnline();
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className="h-[90px] flex flex-wrap justify-between bg-pink-50 shadow-lg">
      <Title />
      {/* <h1 className="py-12 text-black">Food Villa</h1> */}

      <div className="nav-items">
        <ul className="flex pl-10 flex-wrap py-10 text-black">
          <li>
            <h1>OnlineStatus : {isOnline ? "🟢" : "🔴"}</h1>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart - ({cartItems.length}) </Link>
          </li>

          {/* {login ? (
            <button
              onClick={() => {
                setLogin(false);
              }}
            >
              {" "}
              <Link to="/login">Login</Link>
            </button>
          ) : (
            <button
              onClick={() => {
                setLogin(true);
              }}
            >
              Logout
            </button>
          )}
          <li>
            <Link to="/">({loggedInUser})</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default AppHeader;
