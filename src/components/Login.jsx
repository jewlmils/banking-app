import React, { useState } from "react";
import "../style/main.css";

function Login({ loginHandler, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginHandler(email, password);
  };

  return (
    <div>
      <div className="login-page">
        <h1>Welcome Back!</h1>
        <p>Fueling Your Financial Future</p>
        {error && <p className="error-message">{error}</p>}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export { Login };
