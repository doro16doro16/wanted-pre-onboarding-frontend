import { useState, useEffect, useRef } from "react";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import Header from "./Header";

const TodoInput = () => {
  const today = new Date();
  const today_format = today.toISOString().split("T")[0];
  const inputRef = useRef<HTMLInputElement>(null);
  const [todo, setTodo] = useState<String>();
  // const onAdd = (todo) => setTodos([...todo, todo]);

  useEffect(() => {
    if (inputRef.current) {
      console.log(inputRef.current.value);
    }
  }, []);

  const saveData = () => {
    if (inputRef.current) {
      setTodo(inputRef.current.value);
    }
    const todoObj = { todo };
    window.localStorage.setItem("todo", JSON.stringify(todoObj));
  };
  const showCalendar = (e: any) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.showPicker();
    }
  };

  return (
    <>
      <Header title="New Task" />
      <form className="todoform">
        <label htmlFor="todo">What are you planning?</label>
        <input type="text" name="todo" required={true} />
        <i></i>
        <div className="date" onClick={showCalendar}>
          <BsFillCalendarWeekFill />
          <input type="date" name="date" value={today_format} ref={inputRef} />
          {/* <input type="date" name="date" ref={inputRef} /> */}
        </div>

        <button type="submit" onClick={saveData}>
          Create
        </button>
      </form>
    </>
  );
};

export default TodoInput;
