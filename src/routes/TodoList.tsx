import { useState, useEffect } from "react";
import Todo from "./Todo";
import { AiOutlinePlus } from "react-icons/ai";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const TodoList = () => {
  const navigator = useNavigate();
  const goToAddTodo = () => {
    navigator("/todoList/addTodo");
  };

  return (
    <div className="todoList">
      <Header title="All Tasks" />
      <Todo />
      <div className="circle">
        <AiOutlinePlus onClick={goToAddTodo} />
      </div>
    </div>
  );
};

export default TodoList;
