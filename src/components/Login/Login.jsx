import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./Login.css";

const Login = () => {
  const [show, setShow] = useState(false);

  const { signIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const form = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h2>Login pages.</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {show ? <span>Hide Password</span> : <span>Show password</span>}
            </small>
          </p>
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
