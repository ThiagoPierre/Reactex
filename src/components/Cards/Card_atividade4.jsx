import React from 'react';
import { Card } from 'react-bootstrap';

const CaixaAtividade = ({ title, className, children }) => (
  <Card className={`${className}`}>
    <Card.Header><b>{title}</b></Card.Header>
    <Card.Body>{children}</Card.Body>
  </Card>
);

export default CaixaAtividade;
