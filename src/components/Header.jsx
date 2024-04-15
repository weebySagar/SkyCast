import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky-top">
      <nav
        className="navbar navbar-expand-lg shadow"
        style={{ background: "white" }}
      >
        <div className="container">
          <NavLink className="navbar-brand text-black fw-semibold" to={"/"}>
            SkyCast
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
