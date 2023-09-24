import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../Images/Logo.png";

function Navbars() {
  return (
    <>
      <Navbar expand="lg" bg="warning" className="bg-body-warning">
        <Container>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top mx-1"
          />
          <Navbar.Brand href="#home" className="text-white">
            <b>Moviezzo</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
