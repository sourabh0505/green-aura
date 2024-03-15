import React from "react";
import "./header.css";

function Header() {
  return (
    <header className="headerContainer">
      <h1>GreenAura</h1>

      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/aboutus">About Us</a>
        </li>
        <li>
          <a href="/gallery">Gallery</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
