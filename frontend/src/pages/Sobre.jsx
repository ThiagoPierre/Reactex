import React from 'react';
import Image from 'react-bootstrap/Image';
import { Table } from 'react-bootstrap';
import Logo from '../components/Images/logo.png';

const Sobre = () => (
  <Table style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Image
      className="logo"
      src={Logo}
      alt="aopa"
      width="300"

    />
  </Table>
);

export default Sobre;
