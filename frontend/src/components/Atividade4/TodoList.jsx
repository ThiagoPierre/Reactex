import React from 'react';
import {

  Row, Button, ListGroup,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { GiPencil, GiTrashCan } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import Caixa2 from '../Cards/Cards_pages/Card_atividade4';
import 'react-toastify/dist/ReactToastify.css';
import axios from '../../utils/api';

const TodoList = ({ todos, setTodos }) => {
  // notificando usuário
  const notify = () => toast.dark('Atividade removida! 😭😭😭');
  const notifyRemoveError = () => toast.error('Erro ao remover atividade, tente novamente mais tarde!');
  const notifyEdit = () => toast.info('Atividade atualizada!');
  const notifyEditError = () => toast.error('Erro ao atualizar atividade, tente novamente mais tarde ');
  const notifyMarcado = () => toast.info('Atividade realizada!');
  const notifyMarcadoError = () => toast.error('Error, tente novamente mais tarde ');

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

    try {
      const response = await axios.put(`/atividade4/${todo.id}`, {
        ...todo,
        isCompleted: checked,
      });
      notifyMarcado();
      setTodos(newTodos, response.data);
    } catch (e) {
      notifyMarcadoError();
    }
  };

  /* Função de deletar a tarefa */
  const deleteTodo = async (todo, event) => {
    todos.splice(event.target.value, 1);

    try {
      await axios.delete(`/atividade4/${todo.id}`);
      setTodos([...todos]);
      notify();
    } catch (e) {
      notifyRemoveError();
    }
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
      try {
        await axios.put(`/atividade4/${todo.id}`, {
          ...todo,
          edit: false,
        });
        notifyEdit();
      } catch (e) {
        notifyEditError();
      }

      onEditTodo(todo);
    } else {
      notifyEditError();
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
            <Row
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
              <td>
                <Button
                  className="m-2 float-end"
                  onClick={() => onEditTodo(todo)}
                >
                  <GiPencil className="m-2" />
                </Button>

                <Button
                  type="button"
                  variant="danger"
                  className="m1-2 float-end"
                  onClick={(event) => { deleteTodo(todo, event); }}
                >
                  <GiTrashCan className="m-2" />
                </Button>
              </td>
              <ToastContainer />
            </Row>
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
