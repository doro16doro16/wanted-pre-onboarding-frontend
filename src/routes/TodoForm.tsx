import { useState, useRef } from "react";
import { BsFillCalendarWeekFill } from "react-icons/bs";
import { css } from "@emotion/css";
import { useEffect } from "react";
import { forwardRef } from "react";

export const DateInput = forwardRef<HTMLInputElement>(({}, dateRef) => {
  return <input type="date" name="date" ref={dateRef} required={true} />;
});

const TodoForm = ({
  submitTodo,
  title,
  defaultValue,
}: {
  submitTodo: (e: any) => void;
  title: string;
  defaultValue?: string;
}) => {
  const [work, setWork] = useState("");
  const dateRef = useRef<HTMLInputElement>(null);

  const inputChange = (e) => {
    setWork(e.target.value);
  };
  const showCalendar = (e) => {
    e.preventDefault();
    if (dateRef.current) {
      dateRef.current.showPicker();
    }
  };

  useEffect(() => {
    if (defaultValue) {
      setWork(defaultValue);
    }
  }, []);

  return (
    <>
      <form className={todoform} onSubmit={submitTodo}>
        <label htmlFor="todo">What are you planning?</label>
        <input
          type="text"
          id="todo"
          required={true}
          placeholder={title}
          value={work}
          onChange={inputChange}
        />
        <i></i>
        <div className="date" onClick={showCalendar}>
          <BsFillCalendarWeekFill />
          <DateInput />
        </div>
        <button>Create</button>
      </form>
    </>
  );
};

const todoform = css`
  width: 100%;
  height: 100%;
  position: relative;

  label[for="todo"] {
    position: absolute;
    left: 0;
    pointer-events: none;
  }

  input[id="todo"] {
    position: relative;
    top: 100px;
    width: 100%;
    background-color: transparent;
    color: white;
    font-size: 1.25rem;
    transition: 0.5s;
  }
  i {
    position: absolute;
    top: 130px;
    left: 0;
    -moz-border-left-colors: 0;
    height: 2px;
    width: 100%;
    background: #fff;
  }
  i::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      #2196f3,
      #8b47ff,
      #ff1b69,
      #452de3,
      #2196f3
    );
    animation: animate 4s linear infinite;
    transition: 0.5s;
    overflow: hidden;
  }
  @keyframes animate {
    0% {
      background-position-x: 0;
    }
    100% {
      background-position-x: 250px;
    }
  }

  .date {
    display: flex;
    position: absolute;
    top: 200px;
    left: 0;
    input {
      padding-left: 15px;
      background-color: black;
      color: white;
      border: none;
      outline: none;
    }
  }
  button {
    position: absolute;
    margin-right: -35px;
    border: none;
    right: 0;
    bottom: 0;
    width: 250px;
    height: 50px;
    background-color: #3b39db;
    color: white;
    border-radius: 2rem 0 2rem 0;
  }
`;
export default TodoForm;
