import React, { useState } from "react";
import axios from "axios";

const TodoModifyElements = ({ value, setModify, id, checked }) => {
  const token = localStorage.getItem("access_token");

  const [newModify, setNewModify] = useState(value);
  const [newCheckbox, setNewCheckbox] = useState(checked);

  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const updateTodo = () => {
    axios
      .put(
        `https://www.pre-onboarding-selection-task.shop/todos/${id}`,
        {
          todo: newModify,
          isCompleted: newCheckbox,
        },
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        setModify(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <li>
        <label>
          <input
            type="checkbox"
            defaultChecked={checked}
            onChange={(e) => setNewCheckbox(e.target.checked)}
          />
          <input
            data-testid="modify-input"
            defaultValue={value}
            onChange={(e) => setNewModify(e.target.value)}
            className="ml-2"
          />
        </label>
        <button
          data-testid="submit-button"
          onClick={updateTodo}
          className="px-1 ml-2 border border-solid rounded-md border-slate-500 bg-slate-200 hover:bg-slate-300"
        >
          제출
        </button>
        <button
          data-testid="cancel-button"
          onClick={() => setModify(false)}
          className="px-1 ml-2 border border-solid rounded-md border-slate-500 bg-slate-200 hover:bg-slate-300"
        >
          취소
        </button>
      </li>
    </div>
  );
};

export default TodoModifyElements;
