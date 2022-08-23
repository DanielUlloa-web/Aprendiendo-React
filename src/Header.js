import React from "react";
import logo from "./logo.svg";

function Header() {
    return (
      <header>
        <nav className="nav">
          <img src={logo} alt="logo" className="logo"></img>
          <ul className="lista">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    );
  }

export default Header;