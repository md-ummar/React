import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleClick = (e) => setUser({ username, password });

  return (
    <>
      <div className="flex  flex-wrap justify-center bg-slate-400 ">
        <h1> Enter Details to Login</h1>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

export default Login;
