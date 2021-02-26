import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Logo from '../Images/logo.png';

const Header = ({ title, routes = [] }) => (
  <Navbar className="preto" variant="dark">
    <Link className="navbar-brand" to="/">{title}</Link>
    <span className="logo-icon">
      <a href="/">
        <Image className="pd-2 logo" src={Logo} alt={title} width="100" />
      </a>
    </span>
    <Nav className="mr-auto texto-nav">
      {routes.filter(({ visible = true }) => visible).map((route) => (
        <Link className="nav-link" to={route.path}>{route.name}</Link>
      ))}
      <Nav.Link target="blank" href="https://github.com/ThiagoPierre/Reactex">GitHub</Nav.Link>
      <Nav.Link target="blank" href="https://trello.com/b/rp5YhVb3/pitang-02">Trello</Nav.Link>
    </Nav>
    <form className="d-flex input-group w-auto mr-5">
      <input
        type="search"
        className="form-control"
        placeholder="Busca"
        aria-label="Search"
      />
      <button
        className="btn primary botao-search"
        type="button"
        data-mdb-ripple-color="dark"
      >
        <IconContext.Provider value={{ color: '#66FCF1', className: 'global-class-name' }}>
          <div>
            <BsSearch />
          </div>
        </IconContext.Provider>
      </button>
    </form>
  </Navbar>
);

export default Header;
