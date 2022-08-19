import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';
import React from 'react';

const Header=() => {
  return (
    <div>
        <Navbar variant='dark'>
    <Container>
      <Link to='/' className='navbar-brand'>Home</Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Navbar.Brand href="#home">Bookmarks</Navbar.Brand>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header;
