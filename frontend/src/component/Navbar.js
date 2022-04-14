import React from "react";
import { NavLink } from "react-router-dom";
import isAuth, { userType } from "../lib/isAuth";
import Modal from 'react-bootstrap/Modal'
import { Drawer, IconButton, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Button,
} from "@material-ui/core";
import { useMediaQuery } from '../Media.tsx'
import Offcanvas from 'react-bootstrap/Offcanvas'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

const Navbar = () => {
  const bigScreen = useMediaQuery('(min-width: 1005px)');
  const [show, setShow] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);

  const handleClose = () => {
    setShow(false);
    setSidebar(false);
  }
  const handleShow = () => setShow(true);
  const handlemobile = () => setSidebar(true);


  return (
    <>
      {" "}
      <header id="home" className="hero-area">
        <nav className="navbar navbar-expand-lg fixed-top scrolling-navbar">
          {bigScreen ? (
            <div className="container">

              <div className="theme-header clearfix">
                <div className="navbar-header">
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

                            <span className="nav-link" style={{ color: 'black', paddingTop: '5px', cursor: 'pointer' }}>Logout</span>

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

                            <span style={{ color: 'black', paddingTop: '5px', cursor: 'pointer' }}>Logout</span>

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
          ) : (
            <div className="container" style={{ width: '100%', display: 'flex' }}>
              <div>
                <IconButton className="hamburgur">
                  <MenuIcon style={{ color: "#000" }} onClick={handlemobile} />
                </IconButton>
              </div>
              <div className="navbar-header" style={{ display: 'flex' }}>
                <NavLink
                  exact
                  className="navbar-brand"
                  style={{ fontWeight: "bold" }}
                  to={isAuth() ? "/home" : "/"}
                >
                  FirstJob
                </NavLink>
              </div>
            </div>
          )
          }
          <div className="mobile-menu" data-logo="assets/img/logo-mobile.png" />
        </nav>
      </header>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ padding: 0 }}>
          <Modal.Title style={{ fontSize: bigScreen ? 18 : 14, paddingLeft: 8 }}>InNeedJobs</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ fontSize: bigScreen ? 18 : 12, paddingLeft: 8 }}>Are You sure for logOut</Modal.Body>
        <Modal.Footer style={{ padding: 10 }}>
          <Button variant="secondary" onClick={handleClose}
            style={{
              padding: '3px 19px',
              marginRight: 10,
              fontSize: '12px',
              border: '1px solid #D6DDEF',
              backgroundColor: ' #FFFFFF',
              color: '#A7AFC4',
              borderRadius: '4px',
            }}
          >
            <NavLink
              style={{ padding: 0, textDecoration: 'none', color: '#A7AFC4' }}
              exact
              className="nav-link"
              activeClassName=""
              to="/home"
            >
              Close
            </NavLink>
          </Button>
          <Button variant="primary" onClick={handleClose} style={{ padding: '3px 19px', fontSize: '12px', backgroundColor: '#d14545', border: 'none', borderRadius: '4px' }}>
            <NavLink
              style={{ padding: 0, textDecoration: 'none', color: '#fff' }}
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

      {/* MobileView Sidebar */}
      <SwipeableDrawer

        open={sidebar}
        onClose={handleClose}
        onOpen={handlemobile}
      >
        <div style={{
          display: 'flex',
          flexDirection: "column",
          flexWrap: 'wrap',
          alignItems: 'stretch',
          width: '15rem'
        }}
        >
          <div style={{ borderBottom: '1px solid lightgray' }}>
            <NavLink
              onClick={handleClose}
              exact
              className="navbar-brand"
              style={{
                fontWeight: "bold", marginLeft: 14,
                fontSize: 23
              }}
              to={isAuth() ? "/home" : "/"}
            >
              FirstJob
            </NavLink>
          </div>
          {isAuth() ? (
            userType() === "recruiter" ? (
              <>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/home"
                  >
                    Home
                  </NavLink>
                </div>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/addjob"
                  >
                    Add Jobs
                  </NavLink>
                </div>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/myjobs"
                  >
                    My Jobs
                  </NavLink>
                </div>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/employees"
                  >
                    Employees
                  </NavLink>
                </div>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </div>
                <div onClick={() => {
                  debugger
                  handleClose()
                  handleShow()
                }
                } >
                  <span className="nav-link" style={{ color: 'black', paddingTop: 5, fontSize: 23, cursor: 'pointer' }}>Logout</span>
                </div>
              </>
            ) : (
              <>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/home"
                  >
                    Home
                  </NavLink>
                </div>
                <div>
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/applications"
                  >
                    Applications
                  </NavLink>
                </div>
                <div >
                  <NavLink
                    onClick={handleClose}
                    style={{ fontSize: 23 }}
                    exact
                    className="nav-link"
                    activeClassName=""
                    to="/profile"
                  >
                    Profile
                  </NavLink>
                </div>
                <div onClick={() => {
                  handleClose()
                  handleShow()
                }}
                >
                  <span className="nav-link" style={{ color: 'black', paddingTop: '5px', fontSize: 23, cursor: 'pointer' }}>Logout</span>
                </div>
              </>
            )

          ) : (
            <>
              <div>
                <NavLink
                  onClick={handleClose}
                  style={{ fontSize: 23 }}
                  exact
                  className="nav-link"
                  activeClassName=""
                  to="/login"
                >
                  Login
                </NavLink>
              </div>
              <div>
                <NavLink
                  onClick={handleClose}
                  style={{ fontSize: 23 }}
                  exact
                  className="nav-link"
                  activeClassName=""
                  to="/signup"
                >
                  Signup
                </NavLink>
              </div>
            </>
          )
          }

        </div>
      </SwipeableDrawer>
    </>
  );
};

export default Navbar;
