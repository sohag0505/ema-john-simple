import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import { AuthContext } from "../providers/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.error(error));
  };

  return (
    <nav className="header">
      <img src={logo} alt="" />
      <div className="nav-content">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {user && (
          <span className="text-white">
            Welcome {user.email}{" "}
            <button onClick={handleLogout}>Sign Out</button>
          </span>
        )}
      </div>
    </nav>
  );
};

export default Header;
