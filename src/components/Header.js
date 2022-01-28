import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      {user ? (
        <Link to="/Profile"> Bibliophile </Link>
      ) : (
        <Link to="/Home">Bibliophile</Link>
      )}

      {user ? (
        ""
      ) : (
        <Link className="registerButton" to="/Register">
          Register
        </Link>
      )}
      <Login user={user} setUser={setUser} />
    </div>
  );
};

export default Header;
