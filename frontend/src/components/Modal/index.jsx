import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Gif from '../Images/michael.gif';

const ModalCentralizado = (props) => (
  <Modal
      // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header className="texto-modal" closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Dúvidas
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="text-center texto-modal">
      <h4>Até o momento:</h4>
      <p>
        <p>
          Agora as dúvidas e correções foram adicionadas ao
          {' '}
          <a target="blank" href="https://trello.com/b/rp5YhVb3/pitang-02">Trello!</a>
          🎉🎉
        </p>
        <Image src={Gif} alt="Scott" />
      </p>
    </Modal.Body>
  </Modal>
);

export default ModalCentralizado;
