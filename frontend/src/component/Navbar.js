import React from "react";
import { NavLink } from "react-router-dom";
import isAuth, { userType } from "../lib/isAuth";
import Modal from 'react-bootstrap/Modal'
import {
  Button,
} from "@material-ui/core";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {" "}
      <header id="home" className="hero-area">
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div className="container">
            <div className="theme-header clearfix">
              <div className="navbar-header">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#main-navbar"
                  aria-controls="main-navbar"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                  <span className="lni-menu" />
                  <span className="lni-menu" />
                  <span className="lni-menu" />
                </button>
                <NavLink
                  exact
                  className="navbar-brand"
                  style={{ fontWeight: "bold" }}
                  to={isAuth() ? "/home" : "/"}
                >
                  FirstJob
                </NavLink>
              </div>
              <div className="collapse navbar-collapse" id="main-navbar">
                <ul className="navbar-nav mr-auto w-100 justify-content-end">
                  {isAuth() ? (
                    userType() === "recruiter" ? (
                      <>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/home"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/addjob"
                          >
                            Add Jobs
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/myjobs"
                          >
                            My Jobs
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/employees"
                          >
                            Employees
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/profile"
                          >
                            Profile
                          </NavLink>
                        </li>
                        <li className="nav-item" onClick={handleShow} style={{ paddingTop: '18px', marginLeft: '15px' }}>
                          {/* <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/logout"
                          > */}
                          <span style={{ color: 'black', paddingTop: '5px' }}>Logout</span>
                          {/* </NavLink> */}
                        </li>
                      </>
                    ) : (
                      <>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/home"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/applications"
                          >
                            Applications
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink
                            exact
                            className="nav-link"
                            activeClassName=""
                            to="/profile"
                          >
                            Profile
                          </NavLink>
                        </li>
                        <li className="nav-item" onClick={handleShow} style={{ paddingTop: '18px', marginLeft: '15px' }}>
                          {/*  */}
                          <span style={{ color: 'black', paddingTop: '5px' }}>Logout</span>
                          {/* </NavLink> */}
                        </li>
                      </>
                    )
                  ) : (
                    <>
                      <li className="nav-item">
                        <NavLink
                          exact
                          className="nav-link"
                          activeClassName=""
                          to="/login"
                        >
                          Login
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          exact
                          className="nav-link"
                          activeClassName=""
                          to="/signup"
                        >
                          Signup
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div className="mobile-menu" data-logo="assets/img/logo-mobile.png" />
        </nav>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>InNeedJobs</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are You sure for logOut</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
          <NavLink
              exact
              className="nav-link"
              activeClassName=""
              to="/home"
            >
            Close
            </NavLink>
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <NavLink
              exact
              className="nav-link"
              activeClassName=""
              to="/logout"
            >
              Logout
            </NavLink>

          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navbar;
