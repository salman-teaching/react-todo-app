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

  function deleteTodo(id) {
    // logic --> to delete todo

    const filteredArray = todos.filter((todo) => {
      if (todo.id === id) {
        return false;
      } else {
        return true;
      }
    });

    setTodos(filteredArray);
  }

  function toggleTodo(id) {
    let newUpdatedArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.isCompleted = true;
      }

      return todo;
    });

    setTodos(newUpdatedArray);
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
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              <button onClick={() => toggleTodo(todo.id)}>
                Mark as complete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
