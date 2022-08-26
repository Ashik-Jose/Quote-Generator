import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from 'react-router-dom';
import './header.css';
import React from 'react';

const Header=() => {
  return (
    <div>
        <Navbar variant='dark' className='routes'>
    <Container>
      <Link to='/' className='navbar-brand '>Home</Link>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <Link to='/bookmarks' className='navbar-brand'>Bookmarks</Link>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Header;
