import React, { useState } from "react";
import { userData } from "../Data";
import { Login } from "./Login";
import { Dashboard, adminRouter, customerRouter } from "./Dashboard";

export function Authenticate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [client, setClient] = useState(null);
  const [error, setError] = useState("");

  const isLoginSuccess = (email, password) => {
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    user.balance
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
    localStorage.removeItem('currentUser');
  };

  if (isLoggedIn) {
    localStorage.setItem('currentUser', JSON.stringify(client));
    
  
    if (isAdmin) {
      
      return <Dashboard user={client} handleLogout={logout} routes={adminRouter}/>;
    } else {
      return <Dashboard routes={customerRouter}/>
    }
  } else {
    return <Login loginHandler={isLoginSuccess} error={error} />;
  }
}
