import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        Military Tailor
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/category/uniforms">Uniforms</Link>
        </li>
        <li>
          <Link to="/category/accessories">Accessories</Link>
        </li>
        <li>
          <Link to="/category/footwear">Footwear</Link>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
