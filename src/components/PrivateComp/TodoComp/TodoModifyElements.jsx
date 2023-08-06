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
          />
        </label>
        <button data-testid="submit-button" onClick={updateTodo}>
          제출
        </button>
        <button data-testid="cancel-button" onClick={() => setModify(false)}>
          취소
        </button>
      </li>
    </div>
  );
};

export default TodoModifyElements;
