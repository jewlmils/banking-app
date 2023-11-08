import React, { useEffect, useState } from "react";

import { Login } from "./Login";
import { Dashboard, adminRouter, customerRouter } from "./Dashboard";
import { Sidebar } from "./Sidebar";
import { userData } from "../Data";
export function Authenticate() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [client, setClient] = useState(null);
  const [error, setError] = useState("");

  
  

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
    const storedUserData = localStorage.getItem("userData");

    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      console.log('userdata saved')
    }
  }, []);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setIsLoggedIn(true);
      setClient(currentUser);
      setIsAdmin(currentUser.isAdmin);
    }
  }, []);

  if (isLoggedIn) {
    localStorage.setItem("currentUser", JSON.stringify(client));
    return (
      <div className="body">
        <Sidebar
          userRole={isAdmin ? "admin" : "customer"}
          handleLogout={logout}
        />
        <Dashboard
          user={client}
          routes={isAdmin ? adminRouter : customerRouter}
        />
      </div>
    );
  } else {
    return <Login loginHandler={isLoginSuccess} error={error} />;
  }
}
