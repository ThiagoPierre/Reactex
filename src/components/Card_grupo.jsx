import React from 'react';
import { Card } from 'react-bootstrap';

const CaixaGrupo = ({ nomes = [], cardTitle }) => (
  <Card className="m-4">
    <Card.Header><b>{ cardTitle }</b></Card.Header>
    <Card.Body className="p-2">
      <div className="text-center texto">
        <h1>
          nomes=
          {nomes.map(nomes).join('')}
        </h1>
      </div>
    </Card.Body>
  </Card>
);
export default CaixaGrupo;
