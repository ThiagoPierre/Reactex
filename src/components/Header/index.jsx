import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = ({ title, routes = [] }) => (
  <Navbar className="preto" variant="dark">
    <Link className="navbar-brand" to="/">{title}</Link>
    <Nav className="mr-auto">
      {routes.filter((route) => route.visible)
        .map((route) => (
          <Link className="nav-link" to={route.path}>{route.name}</Link>
        ))}
      <Nav.Link target="blank" href="https://github.com/ThiagoPierre/Reactex">GitHub</Nav.Link>
      <Nav.Link target="blank" href="https://trello.com/b/rp5YhVb3/pitang-02">Trello</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
