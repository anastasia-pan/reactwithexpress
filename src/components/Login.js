import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Login({ user, setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/login";

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: userName,
      password: password,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: payload,
    });

    const data = await res.json();
    setUser({ username: data.user.name, id: data.user.id, jwt: data.token });
    console.log(data);
  };

  const logOut = () => setUser(null);

  return (
    <>
      {user ? (
        <input type="button" value="Log Out" onClick={logOut} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="user">User: </label>
          <input
            type="text"
            name="user"
            value={userName}
            onChange={handleUserName}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePassword}
          />
          <input type="submit" value="log in" />
        </form>
      )}
    </>
  );
}

export default Login;
