import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav>
      <Link to="/" className="title">
        Sat qazan
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
      <li><NavLink to='/'>Əsas səhifə</NavLink></li>
      <li><NavLink to='/Categorys'>Bizə qoşul</NavLink></li>
      <li><NavLink to='/Contact'>Bizimlə əlaqə</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
