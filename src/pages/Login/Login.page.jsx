import React from "react";
import GranSaltoLogo from "../../assets/GranSaltoLogo.png";
import "./Login.css";
import { LoginForm } from "./Login.form";

export const LoginPage = () => {
  return (
    <div className="vh-100 vw-100  bg-primary d-flex px-4 flex-column justify-content-center align-items-center">
      <img style={{ width: "150px" }} src={GranSaltoLogo} />
      <div className="container">
        <div className="row justify-content-center">
          <div
            style={{ marginBottom: "5em" }}
            className="bg-white shadow p-3 col-12 col-md-6"
          >
            <small>Please enter your astronaut identification number</small>
            <hr />
            <LoginForm />
          </div>
        </div>
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
