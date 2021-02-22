import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Grupo from './pages/Grupo';
import Header from './components/Header';
import Footer from './components/Footer';
import index from './pages';
import Atividade4 from './components/Atividade4/Todo';
import TodoParameters from './pages/TodoParameters';

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
  component: TodoParameters,
  name: 'Todo',
  visible: false,
},
];

const Routes = () => (
  <div>
    <BrowserRouter>
      <Header title="PITANG 2" to="/Reactex/home" routes={routes} />
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
