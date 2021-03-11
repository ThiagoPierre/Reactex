/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Container, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from './api';

// Função feita para ao clicar no ToDo, abrir suas informações(title, id) em outra página.

function Child() {
  const { id } = useParams();
  const [todoParameter, settodoParameter] = useState('');

  const findTodo = async () => {
    const response = await axios.get(`/todo/${id}`);
    settodoParameter(response.data);
  };

  useEffect(() => {
    findTodo(id);
  }, []);

  return (
    <Container>
      <Card title="Todo Parameters" className="m-4">
        <h3>{`ID To-do: ${todoParameter.id}`}</h3>
        <b>{`Descrição: ${todoParameter.title}`}</b>
      </Card>
    </Container>
  );
}

export default Child;
