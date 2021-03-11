import React, { useState } from 'react';
import {
  Container, Form, Button, Card, Row, Col,
} from 'react-bootstrap';
import axios from '../../utils/api';
import { tokenGang } from '../../utils/constant';
import Caixa from '../../components/Cards/Cards_pages';

export default function LoginHome({ history }) {
  const [isLogin, setIsLogin] = useState(true);

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

    try {
      if (isLogin) {
        const response = await axios.post('/auth', form);
        localStorage.setItem(tokenGang, response.data.token);
        alert('Logged In with Success!');
        history.push('/');
      } else {
        await axios.post('/user', form);
        alert('User Created with Success!');
        setIsLogin(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Container className="m-2">
      <Caixa cardTitle={isLogin ? 'Login' : 'Create new User'}>
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
                  {isLogin ? 'Login' : 'Create'}
                </Button>
                <Button variant="outline-primary ml-3" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? 'Create a new Account' : 'Already have an Account'}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Caixa>
    </Container>
  );
}
