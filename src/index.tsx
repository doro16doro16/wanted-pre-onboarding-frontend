import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TodoList from "./routes/TodoList";
import AddTodo from "./routes/AddTodo";
import { TodoProvider } from "./context/TodoContext";
import styled from "@emotion/styled";
import UpdateTodo from "./routes/UpdateTodo";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const Section = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 600px;
  color: white;
  border-radius: 2rem;
  padding: 15px 35px 0;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/todoList",
    element: <TodoList />,
  },
  {
    path: "/todoList/addTodo",
    element: <AddTodo />,
  },
  {
    // path: "/todoList/updateTodo/:id",
    path: "/todoList/updateTodo",
    element: <UpdateTodo />,
  },
]);

root.render(
  <React.StrictMode>
    <TodoProvider>
      <Section>
        <RouterProvider router={router} />
      </Section>
    </TodoProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
