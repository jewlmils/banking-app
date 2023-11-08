import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  
 
  const handleLogin = (email, password) => {
    // Step 1: Retrieve userData from local storage
    const userData = JSON.parse(localStorage.getItem("userData"));
  
    // Step 2: Find and update loginStatus for the user
    const userIndex = userData.findIndex(
      (user) => user.email === email && user.password === password
    );
  
    if (userIndex !== -1) {
      userData[userIndex].loginStatus = true;
  
      // Step 3: Update currentUser with the same user object
      localStorage.setItem("currentUser", JSON.stringify(userData[userIndex]));
  
      // Step 4: Save the updated userData back to local storage
      localStorage.setItem("userData", JSON.stringify(userData));
  
      console.log("Login successful!");
      
      // Conditionally render <Navigate /> to trigger the redirect
      if (userData[userIndex].isAdmin) {
        console.log('navigating to admin');
        return <Navigate to="/admin" />;
      } else {
        console.log('navigating to customer');
        return <Navigate to="/customer/goals" />;
      }
    } else {
      setError("Invalid email or password");
    }
  }
  

  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  
    // Step 2: Find the user
    const userIndex = userData.findIndex(
      (user) => user.email === currentUser.email && user.password === currentUser.password
    );
  
    if (userIndex !== -1) {
      // Step 3: Update loginStatus for the user
      userData[userIndex].loginStatus = false;
  
      // Step 4: Remove currentUser from local storage
      localStorage.removeItem("currentUser");
  
      // Step 5: Save the updated userData back to local storage
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }
  

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
      <button onClick={handleLogout} >logout</button>
    </div>
  );
}

export { Login };