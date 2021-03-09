import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardUI from '../CardsUI';
import image1 from '../../Assets/atv1.jpg';
import image2 from '../../Assets/atv2.jpg';
import image3 from '../../Assets/atv3.jpg';
import image4 from '../../Assets/atv4.jpg';
import image5 from '../../Assets/atv5.jpg';

const cardsAtividades = [
  {
    id: 1,
    title: 'Atividade 1',
    image: image1,
    url: '/atividade1',
  },
  {
    id: 2,
    title: 'Atividade 2',
    image: image2,
    url: '/atividade2',
  },
  {
    id: 3,
    title: 'Atividade 3',
    image: image3,
    url: '/atividade3',
  },
  {
    id: 4,
    title: 'Atividade 4',
    image: image4,
    url: '/atividade4',
  },
  {
    id: 4,
    title: 'Atividade 5',
    image: image5,
    url: '/user',
  },
];

const CardSecond = () => (
  <Container>
    <Row>
      {cardsAtividades.map(({
        title, image, id, url,
      }) => (
        <Col md={4} key={id} className="mt-3">
          <CardUI imageSource={image} title={title} url={url} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardSecond;
