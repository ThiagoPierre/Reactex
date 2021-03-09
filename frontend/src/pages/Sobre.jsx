import React from 'react';
import Image from 'react-bootstrap/Image';
import {
  Table,
  Card,
} from 'react-bootstrap';

const Sobre = () => (
  <Table style={{
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Card className="m-4 card-color text-white">
      <Card.Header><b>Sobre</b></Card.Header>
      <Card.Body className="p-2">

        {' '}
        <div className="text-center texto-card">
          Estamos trabalhando.
          {' '}
          <Image className="rounded mx-auto d-block mb-4" src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif" roundedCircle />
        </div>
        {' '}

      </Card.Body>
    </Card>
  </Table>
);

export default Sobre;
