import React from "react";
import { Link } from "react-router-dom";

const MainComp = () => {
  return (
    <div>
      <Link to="/signin">
        <span>로그인</span>
      </Link>
      <Link to="/signup">
        <span>회원가입</span>
      </Link>
    </div>
  );
};

export default MainComp;
