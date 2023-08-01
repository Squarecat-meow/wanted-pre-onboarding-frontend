import React, { useState } from "react";

const SigninComp = () => {
  const [emailChecked, setEmailChecked] = useState(false);
  const [pwChecked, setPwChecked] = useState(false);

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
  return (
    <div>
      <input
        data-testid="email-input"
        placeholder="email"
        onChange={(e) => emailCheck(e.target.value)}
        type="email"
      />
      <input
        data-testid="password-input"
        placeholder="password"
        onChange={(e) => passwordCheck(e.target.value)}
        type="password"
      />
      <button
        data-testid="signin-button"
        disabled={!(emailChecked && pwChecked)}
      >
        로그인
      </button>
    </div>
  );
};

export default SigninComp;
