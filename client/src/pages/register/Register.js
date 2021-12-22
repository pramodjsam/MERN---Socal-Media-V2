import { useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./register.css";

export default function Register() {
  const email = useRef();
  const username = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      password.current.setCustomValidity("Password doesn't match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        confirmPassword: confirmPassword.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
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
              type="text"
              required
              ref={username}
              placeholder="Username"
              className="loginInput"
            />
            <input
              type="email"
              required
              ref={email}
              placeholder="Email"
              className="loginInput"
            />
            <input
              ref={password}
              required
              type="password"
              minLength="6"
              placeholder="Password"
              className="loginInput"
            />
            <input
              ref={confirmPassword}
              required
              type="password"
              placeholder="Confirm Password"
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              Sign up
            </button>
            <button className="loginRegisterButton">Log Into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
