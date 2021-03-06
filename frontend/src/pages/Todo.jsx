import React, { useState, useEffect } from 'react';
import TodoList from '../components/Atividade4/TodoList';
import TodoForm from '../components/Atividade4/TodoForm';
import axios from '../utils/api';

const Atividade4 = () => {
  // estado do todo principal - será usado em TodoForm e TodoList
  const [todos, setTodos] = useState([]);
  // fetchToDos está recuperando as informações da API com o get e atualizando no setTodos
  const fetchToDos = async () => {
    const response = await axios.get('/atividade4');
    setTodos(response.data);
  };

  // chama a requisição dos dados sempre que a página for recarregada
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
