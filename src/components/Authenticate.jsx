import React, { useState, useEffect } from "react";
import { userData } from "../Data";
import { Login } from "./Login";
import { BudgetApp } from "./BudgetApp";
import { Dashboard } from "./Dashboard";
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

    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (user) {
      setIsAdmin(user.isAdmin);
      setClient(user);
      setError("");
      setIsLoggedIn(true);

    
      // Check if the current user is different from the stored user
      if (!storedUser || user.email !== storedUser.email) {
        // Update the stored user data in localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));
        // Clear the budget data in localStorage for the previous user
        localStorage.removeItem("budgetData");
      }
    } else {
      setError("Wrong username and password.");
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setClient(null);
    setError("");
    localStorage.removeItem("currentUser");
  };

  if (isLoggedIn) {
    if (isAdmin) {
      return <Dashboard user={client} logout={logout} />;
    } else {
      return <BudgetApp logout={logout} />;
    }
  } else {
    return <Login loginHandler={isLoginSuccess} error={error} />;
  }
}
