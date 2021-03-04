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
  },
  {
    id: 2,
    title: 'Atividade 2',
    image: image2,
  },
  {
    id: 3,
    title: 'Atividade 3',
    image: image3,
  },
  {
    id: 4,
    title: 'Atividade 4',
    image: image4,
  },
  {
    id: 4,
    title: 'Atividade 5',
    image: image5,
  },
];

const CardSecond = () => (
  <Container>
    <Row>
      {cardsAtividades.map(({ title, image, id }) => (
        <Col md={4} key={id} className="mt-3">
          <CardUI imageSource={image} title={title} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default CardSecond;
