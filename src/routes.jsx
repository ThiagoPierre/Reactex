import React, { useState, useEffect } from 'react';
import {
  BrowserRouter, Switch, Route, useParams,
} from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import axios from './utils/api';

import Grupo from './pages/Grupo';
import Header from './components/Header';
import Footer from './components/Footer';
import index from './pages';
import Atividade4 from './components/Atividade4/Todo';

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

const routes = [{
  path: '/',
  name: 'Home',
  component: index,
  visible: false,
}, {
  path: '/grupo',
  name: 'Grupo',
  component: Grupo,
  visible: false,
}, {
  path: '/atividade4',
  name: 'Atividade 4',
  component: Atividade4,
  visible: true,
},
{
  path: '/atividade4/:id',
  component: Child,
  name: '',
  visible: false,
},
];

const Routes = () => (
  <div>
    <BrowserRouter>
      <Header title="PITANG 2" routes={routes} />
      <Switch>
        {routes.map(({ component, path }) => (
          <Route
            key={path}
            path={path}
            component={component}
            exact
          />
        ))}
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>
);

export default Routes;
