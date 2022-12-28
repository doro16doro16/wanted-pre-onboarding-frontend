import { useNavigate } from "react-router-dom";

import "./App.scss";

function App() {
  const navigate = useNavigate();
  const goTodoList = () => {
    navigate("/todoList");
  };
  return (
    <div className="app">
      <h3>Todo</h3>
      <form className="appForm">
        <input />
        <input />
        <div className="signBtn">
          <button>Sign Up</button>
          <button onClick={goTodoList}>Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default App;
