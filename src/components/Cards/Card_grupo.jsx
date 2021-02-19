import React from 'react';
import { Card } from 'react-bootstrap';

const caixaGrupo = ({ names, title }) => (
  <Card className="m-4">
    <Card.Header><b>{names}</b></Card.Header>
    <Card.Body className="p-2">
      <div className="text-center texto">
        <h1>
          {title}
        </h1>
      </div>
    </Card.Body>
  </Card>
);

export default caixaGrupo;
