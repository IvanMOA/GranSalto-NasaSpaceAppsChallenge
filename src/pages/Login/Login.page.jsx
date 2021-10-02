import React from "react";
import GranSaltoLogo from "../../assets/GranSaltoLogo.png";
import "./Login.css";
import { LoginForm } from "./Login.form";

export const LoginPage = () => {
  return (
    <div className="vh-100 vw-100 bg-primary d-flex px-4 flex-column justify-content-center align-items-center">
      <img style={{ width: "130px" }} src={GranSaltoLogo} />
      <div
        style={{ marginBottom: "5em" }}
        className="bg-white shadow p-3 w-100"
      >
        <small>Please enter your astronaut identification number</small>
        <hr />
        <LoginForm />
      </div>
    </div>
  );
};

export const LogsList = (logs) => {
  return (
    <div>
      {logs.map((log) => (
        <div>{log.title}</div>
      ))}
    </div>
  );
};
