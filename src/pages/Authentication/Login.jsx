import React from "react";
import { Link } from "react-router-dom";

export default function Login({ setActivePage }) {
  const [isPasswordVisible, setPasswordVisible] = React.useState(false);

  return (
    <div className="login__container">
      <div className="login__container__loginForm">
        <h2>Sign in to your account</h2>
        <div className="login__container__divider"></div>
        <ul className="login__container__socialAuths">
          <li>
            <Link to="/">
              <i className="ri-facebook-circle-fill"></i>
            </Link>
          </li>
          <li>
            <Link to="/">
              <i className="ri-google-fill"></i>
            </Link>
          </li>
        </ul>

        <span>or use your email account</span>

        <form>
          <label>Email</label>
          <input
          className="input__text" type="email" placeholder="you@awesome.com" required />

          <label>Password</label>
          <input
          className="input__text"
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Must be a secret..."
            required
          />
          <div className="extra">
            <div>
              <input type="checkbox" name="remember_me" />
              <label> Remember Me</label>
            </div>
            <Link to="/">forgot password?</Link>
          </div>
          <button>Sign in</button>
        </form>

        <div className="register">Don't have an account? <button>Sign Up</button></div>
      </div>
    </div>
  );
}
