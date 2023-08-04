import React from "react";

const TodoModifyElements = ({ value, setModify }) => {
  return (
    <div>
      <li>
        <label>
          <input type="checkbox" />
          <input data-testid="modify-input" defaultValue={value} />
        </label>
        <button data-testid="submit-button">제출</button>
        <button data-testid="cancel-button" onClick={() => setModify(false)}>
          취소
        </button>
      </li>
    </div>
  );
};

export default TodoModifyElements;
