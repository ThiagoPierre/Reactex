import React from 'react';
import { GoMarkGithub } from 'react-icons/go';
import '../../styles/index.css';

const Footer = () => (
  <footer className="footer text-center header-footer-theme">
    <div className="text-muted container">
      <p className="text-members">
        Membros: Alan Brito, Augusto Falcão, Diogo Souza, Thiago Barboza Pierre e Tiago Netto
        <a href="https://github.com/ThiagoPierre/Reactex" title="Link para o GitHub">
          {' '}
          <GoMarkGithub />
        </a>
      </p>
      <div> © 2021 Copyright: Gangue do React </div>
    </div>
  </footer>
);

export default Footer;
