import React, { useEffect, useState } from "react";

const SigninComp = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const [emailChecked, setEmailChecked] = useState(false);
  const [pwChecked, setPwChecked] = useState(false);

  const [loginForm, setLoginForm] = useState({
    emailAddr: "",
    password: "",
  });

  useEffect(() => {
    emailCheck(email);
    passwordCheck(pw);
  }, [email, pw, loginForm]);

  const emailCheck = (e) => {
    const emailRegEx = /[@]/;

    const isEmailCorrect = emailRegEx.test(e);
    if (isEmailCorrect === true) {
      setEmailChecked(true);
    } else {
      setEmailChecked(false);
    }
  };

  const passwordCheck = (e) => {
    const passwordRegEx = /.{8,}/;

    const isPasswordCorrect = passwordRegEx.test(e);
    if (isPasswordCorrect === true) {
      setPwChecked(true);
    } else {
      setPwChecked(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoginForm({
      emailAddr: email,
      password: pw,
    });
  };

  return (
    <div className="flex justify-center w-full">
      <div className="w-96 h-96">
        <form onSubmit={onSubmit} className="flex flex-col">
          <label className="text-sm text-gray-500">Email</label>
          <input
            data-testid="email-input"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            className="px-3 py-2 mb-3 leading-tight text-gray-700 border rounded-xl drop-shadow-md border-1 border-slate-400 focus:outline-1 focus:shadow-outline"
          />
          <label className="text-sm text-gray-500">Password</label>
          <input
            data-testid="password-input"
            placeholder="password"
            onChange={(e) => setPw(e.target.value)}
            type="password"
            name="password"
            className="px-3 py-2 mb-3 leading-tight text-gray-700 border rounded-xl drop-shadow-md focus:outline-1 focus:shadow-outline border-1 border-slate-400"
          />
          {!emailChecked && (
            <span className="text-sm text-red-500 ">
              이메일은 @가 포함되어야 합니다.
            </span>
          )}
          {!pwChecked && (
            <span className="text-sm text-red-500">
              비밀번호는 8자 이상이어야 합니다.
            </span>
          )}
          <button
            data-testid="signin-button"
            disabled={!(emailChecked && pwChecked)}
            type="submit"
            className="w-24 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default SigninComp;
