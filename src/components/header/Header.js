import React from "react";
import { Link } from 'react-router-dom'
import "./styles.scss";

const Header = props => {
  return <div className="header">
    <Link to="/">Home</Link>
  </div>
};

export default Header;