import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { useTodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";
import { TodoType } from "../type";
import TodoForm, { DateInput } from "./TodoForm";

const UpdateTodo = () => {
  const navigate = useNavigate();
  const urlParams = new URLSearchParams(window.location.search);
  const id = Number(urlParams.get("id"));
  const [todos, setTodos] = useTodoContext();
  const todo = todos.find((i: TodoType) => i.id === id);
  const [work, setWork] = useState(null);
  const title = "UpdateTodo";
  const dateRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (dateRef.current) {
      dateRef.current.value = todo.date;
    }
    setWork(todo.work);
  }, []);

  const updateTodo = (updated: TodoType) =>
    setTodos(todos.map((i: TodoType) => (i.id === updated.id ? updated : i)));

  const submitTodo = (e: any) => {
    e.preventDefault();
    updateTodo({
      ...todo,
      work,
      date: dateRef.current.value,
      complete: false,
    });
    navigate("/todoList");
  };

  return (
    <>
      <Header title="Update Task" />
      <TodoForm
        title={title}
        submitTodo={submitTodo}
        defaultValue={todo.work}
      />
      <DateInput ref={dateRef} />
    </>
  );
};

export default UpdateTodo;
