import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import SearchBar from "./SearchBar";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">PETSY</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/user/favorite'>Favorites</Link>
            </li>
            <li className="nav-item">
              <Login />
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav >
  )
}

export default NavBar;