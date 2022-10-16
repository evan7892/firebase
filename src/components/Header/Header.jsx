import NavBar from "../NavBar/NavBar";
import "./header.css";

import { Link } from "react-router-dom";
function Header() {
  let title = "Bienvenido a Elite gaming";

  return (
    <header>
      <NavBar />
      <Link to="/">
        <h1 className="header_title">{title}</h1>
      </Link>
    </header>
  );
}

export default Header;
