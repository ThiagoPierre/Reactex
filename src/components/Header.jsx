import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ title, routes = [] }) => (
  <Navbar className="preto" variant="dark">
    <Navbar.Brand href="/">{title}</Navbar.Brand>
    <Nav className="mr-auto">
      {routes.map((route) => (
        <Link className="nav-link" to={route.path}>{route.name}</Link>
      ))}
    </Nav>
  </Navbar>
);

export default Header;
