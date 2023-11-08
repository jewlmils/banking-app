import React, { useState } from "react";

function Login({ loginHandler, error }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    loginHandler(email, password);
  };

  return (
    <div className="split-screen">
      <div className="left">
        <div className="login-page">
          <img className="login-logo" src="src/assets/image/full green logo-01.png" />
          <h1>Welcome Back!</h1>
          <p>Please enter your details</p>
          {error && <p className="error-message">{error}</p>}
          <input
            className="login-input"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export { Login };
