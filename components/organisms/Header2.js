import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Navbar bg="blue" expand="lg" style={{ backgroundImage: 'linear-gradient(to left, #c6ffdd, #fbd786, #f7797d)' }}>
        <div className="p-3">
          <NavDropdown title={<i className="fa fa-user fa-white"></i>} id="user-dropdown">
            <NavDropdown.Item href="Login">Login</NavDropdown.Item>
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
          </NavDropdown>
        </div>
        <Navbar.Toggle aria-controls="navbarExample01" />
        <Navbar.Collapse id="navbarExample01">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="AboutUsPage">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
