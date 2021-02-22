import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import axios from '../../utils/api';

const Atividade4 = () => {
  // estado do todo principal - será usado em TodoForm e TodoList
  const [todos, setTodos] = useState([]);
  // commit
  // fetchToDos está recuperando as informações da API com o get e atualizando no setTodos
  const fetchToDos = async () => {
    const response = await axios.get('/todo');
    setTodos(response.data);
  };

  useEffect(() => {
    fetchToDos();
  }, []);

  // Corpo da Aplicação
  return (
    <div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Atividade4;
