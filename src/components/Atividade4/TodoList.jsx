import React from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Button, ListGroup,
} from 'react-bootstrap';
import { GiPencil, GiTrashCan } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import Caixa2 from '../Cards/Card_atividade4';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../utils/api';

const TodoList = ({ todos, setTodos }) => {
  // adicão do toastify
  const notify = () => toast('Atividade removida! 😭😭😭');
  // Função de verificação da tarefa
  const checkComplete = async ({ target: { checked } }, todo) => {
    const newTodos = todos.map((todoTemp) => {
      if (todoTemp.id === todo.id) {
        return {
          ...todoTemp,
          isCompleted: checked,
        };
      }
      return todoTemp;
    });

    const response = await axios.put(`/todo/${todo.id}`, {
      ...todo,
      isCompleted: checked,
    });

    setTodos(newTodos, response.data);
  };

  /* Função de deletar a tarefa */
  const deleteTodo = async (todo, event) => {
    todos.splice(event.target.value, 1);

    await axios.delete(`/todo/${todo.id}`);
    setTodos([...todos]);
  };

  // Funções para editar uma tarefa
  // onEditTodo recebe os todos e atualiza com o setTodos
  const onEditTodo = (todo) => {
    const newTodos = todos.map((todoTemp) => {
      if (todoTemp.id === todo.id) {
        return {
          ...todoTemp,
          edit: !todoTemp.edit,
        };
      }

      return todoTemp;
    });

    setTodos(newTodos);
  };

  // Função do keven
  const onBlurField = async (todo) => {
    if (todo.title.trim()) {
      await axios.put(`/todo/${todo.id}`, {
        ...todo,
        edit: false,
      });

      onEditTodo(todo);
    } else {
      toast.error('Valor vazio');
    }
  };

  // onChangeTodo vai escrever o novo valor recebido no todo com o setTodos
  const onChangeTodo = (event, index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return {
          ...todo,
          title: event.target.value,
        };
      }

      return todo;
    });

    setTodos(newTodos);
  };

  // Corpo da Aplicação
  return (
    <Caixa2 title="Atividades" className="m-4">
      <Row>
        <ListGroup className="m-2">
          {todos.length ? todos.map((todo, index) => (
            <ListGroup.Item
              key={todo.id}
              style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
              variant="primary"
              className="m-1"
            >

              <input
                className="m-2"
                type="checkbox"
                onChange={(event) => checkComplete(event, todo)}
                checked={todo.isCompleted}
              />

              {todo.edit ? (
                <input
                  onBlur={() => onBlurField(todo)}
                  value={todo.title}
                  onChange={(event) => onChangeTodo(event, index)}
                />
              ) : (
                <Link to={`/atividade4/${todo.id}`} className={todo.isCompleted ? 'completed' : ''}>
                  {todo.title}
                </Link>
              )}

              <Button
                className="m-2 float-end"
                onClick={() => onEditTodo(todo)}
              >
                <GiPencil className="m-2" />
              </Button>

              <Button
                type="button"
                variant="danger"
                className="m-2 float-end"
                onClick={(event) => { deleteTodo(todo, event); notify(); }}
              >
                <GiTrashCan className="m-2" />
              </Button>
              <ToastContainer />
            </ListGroup.Item>
          )) : (
            <tr>
              <td align="center">
                Nenhuma atividade foi adicionada 😅
              </td>
            </tr>
          )}
        </ListGroup>
      </Row>

    </Caixa2>
  );
};

export default TodoList;
