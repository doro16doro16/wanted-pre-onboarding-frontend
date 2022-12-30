import { useState, useEffect, useRef } from "react";
import Header from "./Header";
import { useTodoContext } from "../context/TodoContext";
import { useNavigate } from "react-router-dom";
import TodoForm, { TodoInput } from "./TodoForm";

const AddTodo = () => {
  const navigate = useNavigate();
  const [work, setWork] = useState("");
  const [todos, setTodos] = useTodoContext();
  const dateRef = useRef<HTMLInputElement>(null);
  const title = "Add Todo";

  useEffect(() => {
    if (dateRef.current) {
      const today_format = new Date().toISOString().split("T")[0];
      dateRef.current.value = today_format;
    }
  }, []);

  const addTodo = (todo) => setTodos([todo, ...todos]);

  const submitTodo = (e) => {
    e.preventDefault();
    addTodo({
      id: Date.now(),
      work,
      date: dateRef.current.value,
      complete: false,
    });
    navigate("/todoList");
  };

  return (
    <>
      <Header title="New Task" />
      <TodoForm title={title} submitTodo={submitTodo} />
      <TodoInput ref={dateRef} />
    </>
  );
};

export default AddTodo;
