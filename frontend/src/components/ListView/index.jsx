import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Card from '../Cards/Cards_pages/Card_atividade4';
import TableIndex from '../Table';
import axios from '../../utils/api';

const ListView = ({ columns, endpoint }) => {
  const [rows, setRows] = useState([]);

  const recuperarDadosApi = async () => {
    const response = await axios.get(endpoint);
    setRows(response.data);
  };

  useEffect(() => {
    recuperarDadosApi();
  }, []);

  return (

    <Container className="mt-4">
      <Card title="User">
        <TableIndex
          columns={columns}
          rows={rows}
        />
      </Card>
    </Container>
  );
};

export default ListView;
