import { ChangeEvent, useEffect } from "react";
import { css } from "@emotion/css";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Todo = ({ item, updateTodo, deleteTodo }: any) => {
  const { id, work, date, complete } = item;
  const changeComplete = (e: ChangeEvent<HTMLInputElement>) => {
    updateTodo({ ...item, complete: e.target.checked });
  };
  const navigator = useNavigate();
  const goToUpdateTodo = () => {
    // navigator(`/todoList/updateTodo/id?=${id}`);
    navigator({
      pathname: "/todoList/updateTodo",
      search: `?id=${id}`,
    });
  };

  return (
    <section>
      <div className={todos}>
        <input
          type="checkbox"
          id={id}
          checked={complete}
          onChange={changeComplete}
        />
        <div className="text">
          <label
            className={css`
              text-decoration-line: ${complete ? "line-through" : "none"};
            `}
            htmlFor={id}
          >
            {work}
          </label>
          <p>{item.date}</p>
        </div>
        <div className={icons}>
          <FiEdit onClick={goToUpdateTodo} />
          <FiTrash
            onClick={() => {
              deleteTodo(item);
            }}
          />
        </div>
      </div>
    </section>
  );
};

const todos = css`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  input {
    margin-right: 1rem;
  }
  p {
    margin: 0;
    &:nth-child(2) {
      font-size: 0.875rem;
      padding-top: 0.375rem;
    }
  }
`;

const icons = css`
  position: absolute;
  right: 0;
  > * {
    padding-left: 0.375rem;
  }
`;
export default Todo;
