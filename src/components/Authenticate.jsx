import React, { useEffect, useState } from "react";
import { userData } from "../Data";
import { Login } from "./Login";
import { Dashboard, adminRouter, customerRouter } from "./Dashboard";
import "../style/budget.css";

export function Authenticate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [client, setClient] = useState(null);
  const [error, setError] = useState("");

  const isLoginSuccess = (email, password) => {
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      setIsAdmin(user.isAdmin);
      setClient(user);
      setError("");
      setIsLoggedIn(true);
    } else {
      setError("Wrong username and password.");
    }
  };

  const logout = () => {
    console.log("Logout function called");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setClient(null);
    setError("");
    localStorage.removeItem("currentUser");
    console.log("Logout completed");
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setIsLoggedIn(true);
      setClient(currentUser);
    }
  }, []);

  if (isLoggedIn) {
    localStorage.setItem("currentUser", JSON.stringify(client));

    if (isAdmin) {
      return (
        <>
          <Dashboard user={client} routes={adminRouter} />;
          <button onClick={logout}>Logout</button>
        </>
      );
    } else {
      return (
        <>
          <Dashboard routes={customerRouter} />
          <button onClick={logout}>Logout</button>
        </>
      );
    }
  } else {
    return <Login loginHandler={isLoginSuccess} error={error} />;
  }
}
