import { useState } from "react";

function Register() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/registeruser";

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    //get response
    const payload = JSON.stringify({
      name: user,
      password: password,
    });
    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    console.log(await res.json());
  };

  return (
    <div className="registerBox">
      <h2>Register</h2>
      <form className="registerForm" onSubmit={submitForm}>
        <label htmlFor="user">User:</label>
        <input
          type="text"
          name="user"
          value={user}
          onChange={handleUserChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="I want books!"  />
      </form>
    </div>
  );
}

export default Register;
