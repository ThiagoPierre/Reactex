/* eslint-disable react/jsx-indent */
import React from 'react';
import Modal from 'react-bootstrap/Modal';

const ModalCentralizado = ({ props }) => (
    <Modal
        // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Dúvidas
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>Até o momento</h4>
            <p>
                <p>1. como retirar a tag Home, sendo que a Pitang2 leva para o mesmo lugar.</p>
                <p>2. Arrumar o GH pages, a página quebra quando dá refresh</p>
                <p>3. Card do grupo não tá aceitando props</p>
                <p>4. O aplicativo já começa com um Todo vazio, como retirar</p>
                <p>5. Tentar colocar os nomes e o título como props</p>
            </p>
        </Modal.Body>
    </Modal>
);

export default ModalCentralizado;
