import React, { useState, useEffect } from 'react';
import {
  Container, Form, Button, Card,
} from 'react-bootstrap';
import axios from '../../utils/api';

export default function userFuncs({ history, match: { params: { id } } }) {
  const novoUser = id === 'new';

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const recuperarDados = async () => {
    const response = await axios.get(`/user/${id}`);
    setForm(response.data.user);
  };

  useEffect(() => {
    if (!novoUser) {
      recuperarDados();
    }
  }, [id, novoUser]);

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      if (novoUser) {
        await axios.post('/user', form);
      } else {
        await axios.put(`/user/${id}`, form);
      }

      history.push('/user');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Container className="m-2">
      <Card>
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Login</Form.Label>
            <Form.Control
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Senha</Form.Label>
            <Form.Control
              name="password"
              type="password"
              value={form.password}
              onChange={onChange}
            />
          </Form.Group>

          <Button type="submit">Save Form</Button>
        </Form>
      </Card>
    </Container>
  );
}
