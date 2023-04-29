import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <h2>Login pages.</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <p>
        <small>New to Ema-john?</small>
        <Link to="/signup">Create new account</Link>
      </p>
    </div>
  );
};

export default Login;
