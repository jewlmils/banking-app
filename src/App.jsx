import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoutes.jsx";
import { Login } from "./components/Login.jsx";
import { userData, pageStatus } from "./Data.jsx";
import { adminRouter, customerRouter } from "./components/Dashboard.jsx";
import "./App.css";

function App() {
  const [activeRouter, setActiveRouter] = useState(customerRouter);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    
    localStorage.setItem("userData", JSON.stringify(userData));
    
    
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("pageStatus", JSON.stringify(pageStatus));
      console.log("userData saved");
    }
  }, []);

  useEffect(() => {
    const storedCurrentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (storedCurrentUser) {
      setCurrentUser(storedCurrentUser);
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      const user = userData.find((user) => user.email === currentUser.email);
      setActiveRouter(user.isAdmin ? adminRouter : customerRouter);
    }
  }, [currentUser, userData]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={setCurrentUser} />} />
        <Route element={<PrivateRoutes />}>{activeRouter}</Route>
      </Routes>
    </Router>
  );
}

export default App;
