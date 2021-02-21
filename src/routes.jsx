import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Grupo from './pages/Grupo';
import Header from './components/Header';
import Footer from './components/Footer';
import index from './pages';
import Atividade4 from './components/Atividade4/Todo';

const routes = [{
  path: '/',
  name: 'Home',
  component: index,
  exact: true,
  visible: false,
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
  visible: true,
}];

const Routes = () => (
  <div>
    <BrowserRouter>
      <Header title="PITANG 2" to="/Reactex/home" routes={routes} />
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
    <Footer />
  </div>
);

export default Routes;
