import React, { useContext, useRef } from "react";
import { LoginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import "./login.css";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    LoginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MERNDev</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on MERNDev.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              type="email"
              ref={email}
              required
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              required
              minLength="6"
              className="loginInput"
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="20px" />
              ) : (
                "Create a New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
