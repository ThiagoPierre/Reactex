/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Button } from 'react-bootstrap';
import ListView from '../../components/ListView';
import axios from '../../utils/api';

const User = ({ history }) => {
  const removerUser = async (user) => {
    try {
      await axios.delete(`/user/${user.id}`);
    } catch (e) {
      console.log(e.message);
    }
  };

  const columns = [
    {
      id: 'id',
      value: 'ID',
    },
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
      render: (_, row) => (
        <div>
          <Button onClick={() => history.push(`/user/${row.id}`)}>
            Edit
          </Button>
          <Button
            onClick={() => removerUser(row)}
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
