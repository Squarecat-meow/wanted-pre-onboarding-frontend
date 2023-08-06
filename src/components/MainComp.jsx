import React from "react";
import { Link } from "react-router-dom";

const MainComp = () => {
  return (
    <div className="flex flex-col justify-center w-48 h-48 border-2 border-solid rounded-lg border-slate-500">
      <div className="flex justify-center p-2 m-4 border-2 border-dashed rounded-xl border-slate-400">
        <Link to="/signin">
          <span>로그인</span>
        </Link>
      </div>
      <div className="flex justify-center p-2 m-4 border-2 border-dashed rounded-xl border-slate-400">
        <Link to="/signup">
          <span>회원가입</span>
        </Link>
      </div>
    </div>
  );
};

export default MainComp;
