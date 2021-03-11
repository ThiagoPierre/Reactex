import React from 'react';
import {
  Card,
} from 'react-bootstrap';

const Caixa = ({
  cardTitle, children,
}) => (
  <Card className="m-4 card-color font-color-white ">
    <Card.Header><b>{cardTitle}</b></Card.Header>
    <Card.Body className="p-4">
      {children}
    </Card.Body>
  </Card>
);
export default Caixa;
