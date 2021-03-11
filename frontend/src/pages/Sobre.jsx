/* eslint-disable max-len */
import React from 'react';
import Image from 'react-bootstrap/Image';
import {
  Table,
  Card,
} from 'react-bootstrap';
import ImageAugusto from '../components/Images/Augusto.jpg';
import ImageDiogo from '../components/Images/Diogo.jpg';

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
          <Image className="Imagem Augusto" src={ImageAugusto} roundedCircle />
          <br />
          Augusto Falcão
          <br />
          <br />
          Fala galera, sou o Augusto. Sou geek, louco por tecnologia e arte. Sou cinéfilo, gosto muito de esportes, música e design.
          <br />
          <br />
          Escolhi a Engenharia de Software pois sou criativo, e sempre foi meu sonho usar minha força de trabalho para criar e ajudar a solucionar as dores das pessoas, e sempre quis ser um engenheiro, um líder e empreendedor.
          <br />
          <br />
          <Image className="Imagem Diogo" src={ImageDiogo} roundedCircle />
          <br />
          Diogo
          <br />
          <br />
          Olá!! Me chamo Diogo e sou apaixonado por tecnologia e pelo mundo nerd, desde pequeno sempre nas telas seja no Super Nintendo, Cinema ou no Computador. Sempre curioso por tudo.
          <br />
          <br />
          Então resolvi juntar minhas duas paixões numa página no Instagram chamada Cômodo Nerd!
          <br />
          <br />
          <Image className="rounded mx-auto d-block mb-4" src="https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png" roundedCircle />
          Thiago
          <br />
          <br />
          <Image className="rounded mx-auto d-block mb-4" src="https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png" roundedCircle />
          Tiago
          <br />
          <br />
          <Image className="rounded mx-auto d-block mb-4" src="https://cdn0.iconfinder.com/data/icons/bitcoin-cryptocurrency-lavender-vol-2-1/512/cypherpunk-512.png" roundedCircle />
          Alan
          <br />
          <br />
          {' '}
        </div>
        {' '}

      </Card.Body>
    </Card>
  </Table>
);

export default Sobre;
