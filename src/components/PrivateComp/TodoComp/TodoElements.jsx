import React, { useState } from "react";
import axios from "axios";
import TodoModifyElements from "./TodoModifyElements";

const TodoElements = ({ checked, todos, id }) => {
  const [modify, setModify] = useState(false);

  const token = localStorage.getItem("access_token");

  const handleDeleteTodos = () => {
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

  return (
    <div>
      {modify ? (
        <TodoModifyElements value={todos} setModify={setModify} />
      ) : (
        <li>
          <label>
            <input type="checkbox" defaultChecked={checked} readOnly />
            <span>{todos}</span>
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
            onClick={handleDeleteTodos}
          >
            삭제
          </button>
        </li>
      )}
    </div>
  );
};

export default TodoElements;
