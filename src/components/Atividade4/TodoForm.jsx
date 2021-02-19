import React, { useState } from 'react';
import {
  Col,
  Form, Row, Button,
} from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';
import CaixaAtividade from '../Cards/Card_atividade4';
import axios from '../../utils/api';

export default function TodoForm({ todos, setTodos }) {
  // estado do texto
  const [text, setText] = useState('');

  // Função para adicionar ToDo sem usar a API
  /* const onAddTodo = () => {
    setTodos([...todos, { title: text }]);
    setText('');
  }; */

  // Função para adicionar ToDo usando a API
  const onAddTodo = async (event) => {
    event.preventDefault();

    const data = {
      completed: false,
      title: text,
    };

    await axios.post('/todo', data);

    setTodos([...todos, { title: text }]);
    setText('');
  };

  // Corpo da Aplicação
  return (
    <CaixaAtividade title="ToDo List" className="m-4">

      <h1>
        Lista de Atividades
        <GiOpenBook className="m-2" />
      </h1>
      <Row>
        <Col xl={12} md={9} />
        <Form
          onSubmit={onAddTodo}
          className="m-2"
        >
          <Form.Group>
            <Form.Control
              value={text}
              onChange={(event) => setText(event.target.value)}
              type="text"
              placeholder="Insira sua atividade do dia"
            />
          </Form.Group>
        </Form>

        <Col>
          <Button
            disabled={!text.trim()}
            onClick={onAddTodo}
            type="button"
            className="m-2"
          >
            Adicionar
          </Button>
        </Col>

      </Row>

    </CaixaAtividade>
  );
}
