import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateComp = () => {
  const token = localStorage.getItem("access_token");

  return <div>{token ? <Outlet /> : <Navigate to="/signin" />}</div>;
};

export default PrivateComp;
