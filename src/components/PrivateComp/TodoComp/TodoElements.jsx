import React, { useState } from "react";
import axios from "axios";
import TodoModifyElements from "./TodoModifyElements";

const TodoElements = ({ checked, todos, id }) => {
  const [modify, setModify] = useState(false);
  const [newCheckbox, setNewCheckbox] = useState(checked);

  const token = localStorage.getItem("access_token");

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const deleteTodo = () => {
    axios
      .delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateTodo = (e) => {
    axios
      .put(
        `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        {
          todo: todos,
          isCompleted: e,
        },
        {
          headers: headers,
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
      {modify ? (
        <TodoModifyElements
          value={todos}
          setModify={setModify}
          id={id}
          checked={checked}
        />
      ) : (
        <li>
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              readOnly
              onChange={(e) => updateTodo(e.target.checked)}
            />
            <span className="ml-2">{todos}</span>
          </label>
          <button
            data-testid="modify-button"
            className="px-1 ml-2 border border-solid rounded-md border-slate-500 bg-slate-200 hover:bg-slate-300"
            onClick={() => setModify(true)}
          >
            수정
          </button>
          <button
            data-testid="delete-button"
            className="px-1 ml-2 border border-solid rounded-md border-slate-500 bg-slate-200 hover:bg-slate-300"
            onClick={deleteTodo}
          >
            삭제
          </button>
        </li>
      )}
    </div>
  );
};

export default TodoElements;
