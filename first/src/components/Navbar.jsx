import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Blue Berry</div>
      <input type="text" placeholder="Search products..." className="search-input" />
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Categories</a>
        <a href="#">Products</a>
        <a href="#">Offers</a>
        <a href="#">Login</a>
        <a href="#">Cart</a>
      </div>
    </nav>
  );
};

export default Navbar;
