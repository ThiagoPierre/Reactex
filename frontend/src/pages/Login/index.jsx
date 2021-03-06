import React, { useState } from 'react';
import {
  Container, Form, Button, Card, Row, Col,
} from 'react-bootstrap';
import axios from '../../utils/api';

export default function LoginHome({ history, match: { params: { id } } }) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSubmitLogin = async (event) => {
    event.preventDefault();

    const response = await axios.get(`/login/${id}`);
    setForm(response.data.login);
    history.push(`/login/${form.id}`);
  };

  return (
    <Container className="m-2">
      <Row>
        <Col>
          <Card>
            <Form>
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

              <Button
                onClick={onSubmitLogin}
              >
                Entrar

              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
