import React from "react";
import "./navbar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-menu">
        <Link to="/">
          <h2>Elite Gaming</h2>
        </Link>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categoria/productos">Productos</Link>
        </li>
        <li>
          <Link to="/categoria/ofertas">Ofertas</Link>
        </li>
        <li>
          <CartWidget />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
