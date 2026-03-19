import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  function addTodo() {
    // logic

    const todoObj = {
      todoTitle: todoInput,
      isCompleted: false,
      id: Date.now(),
    };

    const newArr = [...todos, todoObj];
    setTodos(newArr);
  }

  return (
    <div>
      <h1>Todo tracker app</h1>
      <div className="todo-input">
        <input
          onChange={(e) => setTodoInput(e.target.value)}
          value={todoInput}
          type="text"
          placeholder="Enter Todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div className="todos-wrapper">
        {todos.map((todo) => {
          return (
            <div key={todo.id}>
              <p>{todo.todoTitle}</p>
              {todo.isCompleted ? <p>Completed</p> : <p>Incomplete</p>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
