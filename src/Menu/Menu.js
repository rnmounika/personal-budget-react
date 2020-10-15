import React from 'react';
import {
    Link
  } from "react-router-dom";

function Menu() {
  return (
    <nav className="menu"
    role="navigation"
    aria-label="Main menu"
    itemScope
    itemType="https://schema.org/SiteNavigationElement">
    <ul>
        <li><Link to="/">Home</Link></li>
        
        <li><Link to="/about" title="About">About</Link></li>
        
        <li><Link to="/login" title="Login">Login</Link></li>
    
    </ul>
</nav>
  );
}

export default Menu;
