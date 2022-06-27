import React, { useRef } from "react";
// Import Css File
import "./Header.css";
// Import Route Links
import { Link, NavLink } from "react-router-dom";
// Import Logo
import logo from "../../Assets/logo.jpg";

const Header = () => {
  // Hide Menu On Click To Links
  const collapseRef = useRef(null);
  const hideMneu = (e) => {
    collapseRef.current.setAttribute("class", "navbar-collapse collapse");
  };

  return (
    <nav className="navbar navbar-expand-xl bg-light p-0 m-0">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" onClick={hideMneu}>
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#saudiNav"
          aria-controls="saudiNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>
        <div
          className="collapse navbar-collapse"
          id="saudiNav"
          ref={collapseRef}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link m-1 p-2" to="/" onClick={hideMneu}>
                Overview
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/profile"
                onClick={hideMneu}
              >
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/chart"
                onClick={hideMneu}
              >
                Chart
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/investors"
                onClick={hideMneu}
              >
                Investors Presentation
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/business"
                onClick={hideMneu}
              >
                Business Segments
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/analyst"
                onClick={hideMneu}
              >
                Analyst Coverage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/mergers"
                onClick={hideMneu}
              >
                Mergers & Acquisitions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/statements"
                onClick={hideMneu}
              >
                Financial Statements
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/ratios"
                onClick={hideMneu}
              >
                Financial Ratios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/corporate"
                onClick={hideMneu}
              >
                Corporate Action
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link m-1 p-2"
                to="/subscriptions"
                onClick={hideMneu}
              >
                Subscriptions Center
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
