import React, { useState } from 'react';
import {
  Col,
  Form, Row, Button,
} from 'react-bootstrap';
import { GiOpenBook } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import Caixa2 from '../Cards/Card_atividade4';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../utils/api';

export default function TodoForm({ todos, setTodos }) {
  // estado do texto
  const [text, setText] = useState('');
  const notify = () => toast('Atividade adicionada! 🤣🤣🤣');
  // Função para adicionar ToDo
  const onAddTodo = async (event) => {
    event.preventDefault();

    const data = {
      isCompleted: false,
      title: text,
    };

    const response = await axios.post('/todo', data);

    setTodos([...todos, response.data]);
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
            onClick={(event) => { onAddTodo(event); notify(); }}
            type="button"
            className="m-2"
          >
            Adicionar
          </Button>
          <ToastContainer />
        </Col>

      </Row>

    </Caixa2>
  );
}
