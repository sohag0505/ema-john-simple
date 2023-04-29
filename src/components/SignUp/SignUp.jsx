import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import "./SignUp.css";

const SignUp = () => {
  const [error, setError] = useState(" ");
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    setError(" ");
    if (password !== confirm) {
      setError("Your pass did not match");
      return;
    } else if (password.length < 6) {
      setError("pass must be 6 characters or longer");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  return (
    <div>
      <h2>This is SignUp.</h2>
      <form onSubmit={handleSignUp}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div>
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" id="" required />
        </div>
        <input type="submit" value="Sign Up" />
      </form>
      <p>
        <small>Already have an account?</small> <Link to="/login">Login</Link>
      </p>
      <p>{error}</p>
    </div>
  );
};

export default SignUp;
