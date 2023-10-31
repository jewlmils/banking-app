import React, { useState } from "react";
import { userData } from "../Data";
import { Login } from "./Login";
import { BudgetApp } from "./BudgetApp";
import { Dashboard } from "./Dashboard";

export const Authenticate = () => {
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
    setIsLoggedIn(false);
    setIsAdmin(false);
    setClient(null);
    setError("");
    localStorage.removeItem("currentUser"); // Remove the user from local storage
  };

  const updateBalance = (newBalance) => {
    setClient({ ...client, balance: newBalance });
  };

  if (isLoggedIn) {
    localStorage.setItem("currentUser", JSON.stringify(client));
    if (isAdmin) {
      return <Dashboard user={client} handleLogout={logout} />;
    } else {
      return (
        <BudgetApp
          user={client}
          balance={client.balance} // Pass the user's balance
          handleLogout={logout}
          updateBalance={updateBalance}
        />
      );
    }
  } else {
    return <Login loginHandler={isLoginSuccess} error={error} />;
  }
};
