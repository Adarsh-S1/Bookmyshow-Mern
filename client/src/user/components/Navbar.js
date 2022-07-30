import React from "react";
import {Link} from "react-router-dom"
import "../assets/css/Navbar/Navbar.css";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { toggleSidebar} = useAppContext()
  return (
    <>
      <link 
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
        crossOrigin="anonymous"
      ></link>

      <header id="header1">
        <div id="upper">
          <div id="logo">
            <Link to="/">
              <img src="/logo192.png" alt="logo" height="70" width="132" />
            </Link>

            <img
              src="/user/Navbar/search.svg"
              alt="logo"
              height="15"
              width="auto"
              className="search"
            />
          </div>
          <div>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Search for Movies, Events, Plays, Sports and Activities"
                aria-label="Search"
              />
            </form>
          </div>
          <div id="navbar_ur">
            <nav className="navbar navbar-expand-md">
              <div className="container-fluid">
                <ul className="nav navbar-nav">
                  <li>
                    <div id="region_button" className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Place
                      </button>
                    </div>
                  </li>
                  <li>
                    <div id="signin_button">
                      <button type="button" className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="toggle" onClick={toggleSidebar}>
                      <svg viewBox="0 0 100 80" width="40" height="40">
                        <rect width="120" height="10"></rect>
                        <rect y="30" width="120" height="10"></rect>
                        <rect y="60" width="120" height="10"></rect>
                      </svg>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div id="lower">
          <nav className="navbar navbar-expand-md">
            <div className="container-fluid">
              <ul id="navbar_left" className="nav navbar-nav">
                <li>
                  <Link to="/list-movies">Movies</Link>
                </li>
                <li>
                  <Link to="/booked-shows">My Shows</Link>
                </li>
                <li>
                  <Link to="/list-stream-movies">
                    Stream<sup>NEW</sup>
                  </Link>
                </li>
              </ul>
              <ul id="navbar_right" className="nav navbar-nav">
                <div
                  className="collapse navbar-collapse"
                  id="collapsibleNavbar"
                >
                  <li>
                    <Link to="/theatre-login">
                      ListYourShow<sup>NEW</sup>
                    </Link>
                  </li>
                  <li>
                    <Link to="/offers">Offers</Link>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      <header id="header2">
        <div id="header2_nav">
          <div>
            <p>It All Starts Here!</p>
          </div>
          <div id="region_button2">
            <div className="btn-group dropright">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                NCR
              </button>
            </div>
            <div id="search_icon">
              <img
                alt=""
                src="/user/Navbar/search.svg"
                height="25"
                width="20"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
