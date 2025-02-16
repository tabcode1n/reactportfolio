import React from "react";
import { Link } from "react-router-dom";
import "./App.css"

const Nav = () => {
  return (
    <>
     <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
      <NavLink className="nav-link" to="/">Home</NavLink>
        <NavLink className="nav-link" to="/about">About</NavLink>
        <NavLink className="nav-link" to="/projects">Projects</NavLink>
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  );
};  

export default Nav;