import React from 'react';
import styles from '../../styles/Header.module.css';
import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';

const Header = () => {
  return (
    <>
      <Navbar bg="blue" expand="lg">
        <Navbar.Toggle aria-controls="navbarExample01" />
        <Navbar.Collapse id="navbarExample01">
          <Nav className="me-auto">
            <Link href="/home">
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/about">
              <Nav.Link>About Us</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className={styles.title}>
        <h1>Social Company Events</h1>
      </div>
    </>
  );
};

export default Header;
