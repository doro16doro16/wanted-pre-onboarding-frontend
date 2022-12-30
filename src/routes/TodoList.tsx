import { useState, useEffect } from "react";
import { css } from "@emotion/css";
import Todo from "./Todo";
import { AiOutlinePlus } from "react-icons/ai";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import { TodoType } from "../type";
import { useTodoContext } from "../context/TodoContext";

const TodoList = () => {
  const navigator = useNavigate();
  const goToAddTodo = () => {
    navigator("/todoList/addTodo");
  };
  const [todos, setTodos] = useTodoContext();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const updateTodo = (updated: TodoType) =>
    setTodos(todos.map((i: TodoType) => (i.id === updated.id ? updated : i)));

  const deleteTodo = (deleted: TodoType) =>
    setTodos(todos.filter((i: TodoType) => i.id !== deleted.id));

  return (
    <div className={todoList}>
      <Header title="All Tasks" />
      {todos?.map((item: TodoType) => (
        <Todo
          key={item.id}
          item={item}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <div className="circle">
        <AiOutlinePlus onClick={goToAddTodo} />
      </div>
    </div>
  );
};

const todoList = css`
  position: relative;
  overflow: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  .circle {
    position: absolute;
    top: 400px;
    right: 0;
    background-color: #424053;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
  }
`;

export default TodoList;
