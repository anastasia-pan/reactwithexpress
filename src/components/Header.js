import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  return (
    <div className="header">
      <Link className="Logo" to="/Home">
        Bibliophile
      </Link>
      <div className="header-right">
        {user ? (
          ""
        ) : (
          <Link className="registerButton" to="/Register">
            Register
          </Link>
        )}
        <Login user={user} setUser={setUser} />
      </div>
    </div>
  );
};

export default Header;
