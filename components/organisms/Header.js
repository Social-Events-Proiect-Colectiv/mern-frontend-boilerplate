import React from 'react';
import SearchBar from '../molecules/SearchBar';
import styles from '../../styles/Header.module.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Navbar bg="white" expand="lg">
        <Navbar.Toggle aria-controls="navbarExample01" />
        <Navbar.Collapse id="navbarExample01">
          <Nav className="me-auto">
            <Nav.Link href="#" active>Home</Nav.Link>
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
