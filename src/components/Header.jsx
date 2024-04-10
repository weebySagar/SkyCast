import React from "react";

const Header = () => {
  return (
    <header className="sticky-top">
      <nav class="navbar navbar-expand-lg shadow" style={{background:"white"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            SkyCast
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
