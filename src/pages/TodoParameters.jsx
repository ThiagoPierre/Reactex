import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../utils/api';
import Card from '../components/Cards/Card';

export default function index() {
  const { id } = useParams();
  const [todoParameters, setParameters] = useState('');

  const findTodoBy = async () => {
    const response = await axios.get(`/todo/${id}`);
    setParameters(response.data);
  };

  useEffect(() => {
    findTodoBy(id);
  }, []);

  return (
    <Container>
      <Card title="Todo Parameters" className="m-4">
        <h3>{`ID ${todoParameters.id}`}</h3>
        <p>{`To Do: ${todoParameters.title}`}</p>
      </Card>
    </Container>
  );
}
