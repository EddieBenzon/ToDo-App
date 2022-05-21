import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <h3>
          Do it App<span> - nothing to it but to do it!</span>
        </h3>
      </Link>
    </div>
  );
};

export default Header;
