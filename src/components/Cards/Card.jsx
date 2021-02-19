import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

import ModalCentralizado from '../Modal';

// Criação do card
const Caixa = ({
  info, cardTitle,
}) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <Card className="m-4">
      <Card.Header><b>{cardTitle}</b></Card.Header>
      <Card.Body className="p-2">
        <Button variant="dark" onClick={() => setModalShow(true)} className="p-2 preto" data-toggle="modal" data-target="#exampleModalLong">
          {info}
          {' '}
        </Button>
        <ModalCentralizado
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <div className="text-center texto">
          There are no items yet.
          {' '}
          <Image className="rounded mx-auto d-block " src="https://media0.giphy.com/media/LmNwrBhejkK9EFP504/200.gif" roundedCircle />
        </div>
      </Card.Body>
    </Card>
  );
};
export default Caixa;
