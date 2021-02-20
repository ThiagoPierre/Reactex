import React from 'react';
import {
  Row, Button, ListGroup,
} from 'react-bootstrap';
import { GiPencil, GiTrashCan } from 'react-icons/gi';
import { ToastContainer, toast } from 'react-toastify';
import Caixa2 from '../Cards/Card_atividade4';
import 'react-toastify/dist/ReactToastify.css';

const TodoList = ({ todos, setTodos }) => {
  // adicão do toastify
  const notify = () => toast('Atividade removida! 😭😭😭');
  // Função de verificação da tarefa
  const checkComplete = (id) => {
    const newTodos = [...todos];
    newTodos[id].isCompleted = !newTodos[id].isCompleted;
    setTodos(newTodos);
  };

  // Função de deletar a tarefa
  const deleteTodo = (event) => {
    todos.splice(event.target.value, 1);
    setTodos([...todos]);
  };

  // Funções para editar uma tarefa
  // onEditTodo recebe os todos e atualiza com o setTodos
  const onEditTodo = (index) => {
    const newTodos = todos.map((todo, todoIndex) => {
      if (todoIndex === index) {
        return {
          ...todo,
          edit: !todo.edit,
        };
      }

      return todo;
    });

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
          {todos.length ? todos.map((todo, index) => (
            <ListGroup.Item
              key={todo.title}
              style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
              variant="primary"
              className="m-1"
            >

              <input
                className="m-2"
                type="checkbox"
                onClick={() => checkComplete(index)}
              />

              {todo.title}

              {todo.edit ? (
                <input
                  value={todo.title}
                  onChange={(event) => onChangeTodo(event, index)}
                />
              ) : (
                <span className={todo.completed ? 'completed' : ''} />
              )}

              <Button
                className="m-2 float-end"
                onClick={() => onEditTodo(index)}
              >
                <GiPencil className="m-2" />
              </Button>

              <Button
                type="button"
                variant="danger"
                className="m-2 float-end"
                onClick={(event) => { deleteTodo(event); notify(); }}
                value={index}
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
