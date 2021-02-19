import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Grupo from './components/Cards/Card_grupo';
import Header from './components/Header';
import index from './pages';
import Atividade4 from './components/Atividade4/Todo';

const routes = [{
  path: '/home',
  name: 'Home',
  component: index,
  exact: true,
}, {
  path: '/grupo',
  name: 'Grupo',
  component: Grupo,
  exact: true,
}, {
  path: '/atividade4',
  name: 'Atividade 4',
  component: Atividade4,
  exact: true,
}];

const Routes = () => (
  <BrowserRouter>
    <Header title="PITANG 2" to="/home" routes={routes} />
    <Switch>
      {routes.map(({ component, path, exact }) => (
        <Route
          key={path}
          path={path}
          component={component}
          exact={exact}
        />
      ))}
    </Switch>
  </BrowserRouter>
);

export default Routes;
