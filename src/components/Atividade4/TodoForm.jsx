import React, { useState } from 'react';
import {
  Col,
  Form, Row, Button,
} from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';
import Caixa2 from '../Card_atividade4';

export default function TodoForm({ todos, setTodos }) {
  // estado do texto
  const [text, setText] = useState('');

  // Função para adicionar ToDo
  const onAddTodo = () => {
    setTodos([...todos, { title: text }]);
    setText('');
  };

  // Corpo da Aplicação
  return (
    <Caixa2 title="ToDo List" className="m-4">

      <h1>
        Lista de Atividades
        <GiOpenBook className="m-2" />
      </h1>
      <Row>
        <Col xl={12} md={9} />
        <Form className="m-2">
          <Form.Group>
            <Form.Control
              type="text"
              value={text}
              onChange={(event) => setText(event.target.value)}
              placeholder="Insira sua atividade"
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

    </Caixa2>
  );
}
