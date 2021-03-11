import Child from './utils/TodoParameters';
import Sobre from './pages/Sobre';
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
  private: false,
},
{
  path: '/home',
  name: 'Home',
  component: index,
  visible: false,
  private: true,
}, {
  path: '/atividade4',
  name: 'ToDo List',
  component: Atividade4,
  visible: true,
  private: true,
},
{
  path: '/user',
  name: 'User',
  component: User,
  visible: true,
  private: true,
},
{
  path: '/user/:id',
  name: 'User',
  component: UserFuncs,
  visible: false,
  private: true,
},
{
  path: '/atividade4/:id',
  component: Child,
  name: '',
  visible: false,
  private: true,
},
{
  path: '/sobre',
  name: 'Sobre',
  component: Sobre,
  visible: true,
  private: true,
},
];

export default routes;
