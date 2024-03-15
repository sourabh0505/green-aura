import React from "react";
import "./header.css";
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className="headerContainer">
      <h1>GreenAura</h1>

      <ul>
        <li>
          <Link className="navLinks" to="/">Home</Link>
        </li>
        <li>
          <Link className="navLinks" to="/aboutus">About</Link>
        </li>
        <li>
          <Link className="navLinks" to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link className="navLinks" to="/books">Books</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
