import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoElements from "./TodoComp/TodoElements";

const TodoComp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState("");

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    getTodos();
  }, [todos]);

  const getTodos = () => {
    axios
      .get("https://www.pre-onboarding-selection-task.shop/todos", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createTodo = (newTodos) => {
    axios
      .post(
        "https://www.pre-onboarding-selection-task.shop/todos",
        {
          id: 1,
          todo: newTodos,
          isCompleted: false,
          userID: 1,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1 className="mb-5 text-4xl font-bold">TodoComp</h1>
      <input
        data-testid="new-todo-input"
        className="px-3 py-2 mb-3 leading-tight text-gray-700 border rounded-xl drop-shadow-md border-1 border-slate-400 focus:outline-1 focus:shadow-outline"
        onChange={(e) => setNewTodos(e.target.value)}
      />
      <button
        data-testid="new-todo-add-button"
        className="w-24 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
        onClick={() => createTodo(newTodos)}
      >
        추가
      </button>
      {todos.map((todos) => (
        <div key={todos.id}>
          <TodoElements
            checked={todos.isCompleted}
            todos={todos.todo}
            id={todos.id}
          />
        </div>
      ))}
    </div>
  );
};

export default TodoComp;
