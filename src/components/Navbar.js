import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

function TopNav(props) {
  return (
    <>
      <Navbar className="topnav">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">Pharma</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#features">Browse</Nav.Link>
          <Nav.Link href="#pricing">How it Works</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Button variant="secondary" className="mr-3">
            Login
          </Button>
          <Button variant="primary">Register</Button>
        </Nav>
      </Navbar>
      {props.children}
    </>
  );
}

export default TopNav;
