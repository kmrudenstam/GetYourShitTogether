import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
// import logo from "../logo.svg";
import "./Compstyles/Descriptionstyle.css";

const Nav = () => (

  <div >
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/dashboard">GYST</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/dashboard">Dashboard <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/add-shit">   Add $#!T</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/journal">Journal</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
);

export default Nav;
