import React, { useEffect, useState } from "react";

const SignupComp = () => {
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
    <div>
      <form onSubmit={onSubmit}>
        <input
          data-testid="email-input"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
        />
        <input
          data-testid="password-input"
          placeholder="password"
          onChange={(e) => setPw(e.target.value)}
          type="password"
          name="password"
        />
        <button
          data-testid="signup-button"
          disabled={!(emailChecked && pwChecked)}
          type="submit"
        >
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignupComp;
