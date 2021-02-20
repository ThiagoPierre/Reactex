import React from 'react';
import {
  Row, Button, ListGroup,
} from 'react-bootstrap';
import { GiPencil, GiTrashCan } from 'react-icons/gi';
import axios from '../../utils/api';
import Caixa2 from '../Cards/Card_atividade4';

const TodoList = ({ todos, setTodos }) => {
  // Função de verificação da tarefa
  const checkComplete = async ({ target: { checked } }, todo) => {
    const newTodos = todos.map((_todo) => {
      if (_todo.id === todo.id) {
        return {
          ..._todo,
          isCompleted: checked,
        };
      }
      return _todo;
    });

    await axios.put(`/todo/${todo.id}`, {
      ...todo,
      isCompleted: checked,
    });

    setTodos(newTodos);
  };

  // Função de deletar a tarefa
  const deleteTodo = async (todo, event) => {
    todos.splice(event.target.value, 1);

    await axios.delete(`/todo/${todo.id}`);
    setTodos([...todos]);
  };

  // Funções para editar uma tarefa
  // onEditTodo recebe os todos e atualiza com o setTodos
  const onEditTodo = async (todo) => {
    const newTodos = todos.map((oneTodo) => {
      if (oneTodo.id === todo.id) {
        return {
          ...oneTodo,
          edit: !oneTodo.edit,
        };
      }

      return oneTodo;
    });
    await axios.put(`/todo/${todo.id}`, { ...todo, edit: false });

    setTodos(newTodos);
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
          {todos.map((todo, index) => (
            <ListGroup.Item
              key={todo.title}
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
                  value={todo.title}
                  onChange={(event) => onChangeTodo(event, index)}
                />
              ) : (
                <span className={todo.isCompleted ? 'isCompleted' : ''}>
                  {todo.title}
                </span>
              )}

              <Button
                className="m-2"
                onClick={() => onEditTodo(todo)}
              >
                <GiPencil className="m-2" />
              </Button>

              <Button
                type="button"
                variant="danger"
                className="m-2"
                onClick={(event) => deleteTodo(todo, event)}
                value={index}
              >
                <GiTrashCan className="m-2" />
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Row>

    </Caixa2>
  );
};

export default TodoList;
