import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { BsSearch } from 'react-icons/bs';
import { IconContext } from 'react-icons';
import Logo from '../Images/logo.png';
import { tokenGang } from '../../utils/constant';

const Header = ({ title, routes = [] }) => (
  <Navbar className="header-footer-theme" variant="dark">
    <Link className="navbar-brand" to="/">{title}</Link>
    <span className="logo-icon">
      <Link to="/">
        <Image className="pd-2 logo" src={Logo} alt={title} width="100" />
      </Link>
    </span>
    <Nav className="mr-auto texto-nav">
      {routes.filter(({ visible = true }) => visible).map((route) => (
        <Link className="nav-link" to={route.path}>{route.name}</Link>
      ))}
      <Nav.Link target="blank" href="https://github.com/ThiagoPierre/Reactex">GitHub</Nav.Link>
      <Nav.Link target="blank" href="https://trello.com/b/rp5YhVb3/pitang-02">Trello</Nav.Link>
      <Button className="text-nav " onClick={localStorage.removeItem(tokenGang)}>Log Out</Button>
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
