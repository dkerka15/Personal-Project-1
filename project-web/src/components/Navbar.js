import React from 'react';
import './assets/styles/Navbar.css';  // Import styles for the Navbar (optional)

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="/" className="navbar-link">Home</a></li>
        <li><a href="/about" className="navbar-link">About</a></li>
        <li><a href="/contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;