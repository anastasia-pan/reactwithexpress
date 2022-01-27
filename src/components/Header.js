import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

const Header = ({ user, setUser }) => {
  return (
    <>
      <Register />
      <Login user={user} setUser={setUser} />
    </>
  );
};

export default Header;
