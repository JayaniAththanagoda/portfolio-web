import React from "react";
import "./navbar.css";
import logo from "../../Assets/logo.png";

import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link className="desktopMenuListItem">About</Link>
        <Link className="desktopMenuListItem">Portfolio</Link>
      </div>
      <button className="desktopMenuBtn">Contact me </button>
    </nav>
  );
};
export default Navbar;
