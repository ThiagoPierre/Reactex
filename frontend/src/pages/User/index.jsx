/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Button } from 'react-bootstrap';
import ListView from '../../components/ListView';
import axios from '../../utils/api';

const User = ({ history }) => {
  const removerUser = async (user) => {
    try {
      await axios.delete(`/user/${user._id}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const columns = [
    {
      id: 'email',
      value: 'Email',
    },
    {
      id: 'password',
      value: 'Password',
    },
    {
      id: 'action',
      value: 'Funções',
      render: (_, user) => (
        <div>
          <Button onClick={() => history.push(`/user/${user._id}`)}>
            Edit
          </Button>
          <Button
            onClick={() => removerUser(user)}
            className="m-2"
            variant="danger"
          >
            Remove
          </Button>
        </div>
      ),
    },
  ];

  return (
    <ListView
      AddButton={
        () => (
          <Button
            onClick={() => history.push('/user/new')}
            variant="primary"
          >
            Novo User
          </Button>
        )
      }
      columns={columns}
      endpoint="/user"
    />
  );
};

export default User;
