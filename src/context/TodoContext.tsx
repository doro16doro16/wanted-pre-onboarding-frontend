import { createContext, useState, useContext } from "react";
import { TodoType } from "../type";

const StateContext = createContext([]);
const getTodosFromLocalStorage = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  }
  return [];
};

export function TodoProvider({ children }: { children?: React.ReactNode }) {
  const [todos, setTodos] = useState<TodoType[] | undefined>(() =>
    getTodosFromLocalStorage()
  );
  return (
    <StateContext.Provider value={[todos, setTodos]}>
      {children}
    </StateContext.Provider>
  );
}

export const useTodoContext = () => useContext(StateContext);
