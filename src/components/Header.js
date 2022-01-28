import Register from "./Register";
import Login from "./Login";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  return (
    <>
      <Register />
      <Login user={user} setUser={setUser} />
    </>
  );
};

export default Header;
