import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export let email = null;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    // Step 1: Retrieve userData from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
    let pageStatus =JSON.parse(localStorage.getItem("pageStatus"))
    // Step 2: Find and update loginStatus for the user
    const userIndex = userData.findIndex(
      (user) => user.email === email && user.password === password
    );

    if (userIndex !== -1) {
      // Set isAdmin based on the user's role
      const isAdmin = userData[userIndex].isAdmin;
      pageStatus= true;
      userData[userIndex].loginStatus = true;

      // Step 3: Update currentUser with the same user object
      localStorage.setItem("currentUser", JSON.stringify(userData[userIndex]));
      localStorage.setItem("pageStatus",JSON.stringify(pageStatus));

      // Step 4: Save the updated userData back to local storage
      localStorage.setItem("userData", JSON.stringify(userData));
      email= userData[userIndex].email;
      console.log("Login successful!");
      // Redirect to the root route ("/") after successful login
      navigate("/");
      
      window.location.reload();
    } else {
      setError("Invalid email or password");
    }
  }

  useEffect(() => {
    // Check if the user is already logged in (loggedIn state)
    if (localStorage.getItem("currentUser")) {
      navigate("/"); // Redirect to the root route ("/")
    }
  }, [navigate]);

  return (
    <div className="split-screen">
      <div className="left">
        <div className="login-page">
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
          <button className="login-button" onClick={() => handleLogin(email, password)}>
            Login
          </button>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
}

export { Login };
