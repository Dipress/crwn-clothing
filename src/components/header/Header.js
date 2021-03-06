import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = props => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">Home</Link>
      <div className="options">
        <Link className="option" to="/shop">SHOP</Link>
        <Link className="option" to="/contact">CONTACT</Link>
      </div>
    </div>
  );
};

export default Header;
