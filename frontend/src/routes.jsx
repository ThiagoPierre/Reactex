import React from 'react';
import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import Child from './utils/TodoParameters';
import Sobre from './pages/Sobre';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import index from './pages';
import Atividade4 from './pages/Todo';
import User from './pages/User';
import UserFuncs from './pages/User/userFuncs';

const routes = [{
  path: '/login',
  name: 'Login',
  component: Login,
  visible: false,
},
{
  path: '/',
  name: 'Home',
  component: index,
  visible: false,
}, {
  path: '/atividade4',
  name: 'ToDo List',
  component: Atividade4,
  visible: true,
},
{
  path: '/user',
  name: 'User',
  component: User,
  visible: true,
},
{
  path: '/user/:id',
  name: 'User',
  component: UserFuncs,
  visible: false,
},
{
  path: '/atividade4/:id',
  component: Child,
  name: '',
  visible: false,
},
{
  path: '/sobre',
  name: 'Sobre',
  component: Sobre,
  visible: true,
},
];

const Routes = () => (
  <div>
    <BrowserRouter>
      <Header routes={routes} />
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
