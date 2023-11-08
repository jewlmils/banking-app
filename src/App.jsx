import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { PrivateRoutes } from "./components/PrivateRoutes.jsx";
import { Login } from "./components/Login.jsx";
import { userData, pageStatus } from "./Data.jsx";
import { DashboardWrapper } from "./components/DashboardWrapper.jsx";
import { Overview } from "./pages/overview/Overview.jsx";
import { CreateUser } from "./pages/createuser/CreateUser.jsx";
import { Accounts } from "./pages/accounts/Accounts.jsx";
import { TransactPage } from "./pages/transactPage/TransactPage.jsx";
import { SendMoney } from "./pages/send-money/SendMoney.jsx";
import { Currency } from "./pages/currency/Currency.jsx";
import { BudgetApp } from "./pages/budget/BudgetApp.jsx";
import { BuyLoad } from "./pages/buy-load/BuyLoad.jsx";
import { Goals } from "./pages/Goals.jsx";
import "./App.css";

export const adminRouter = (
  <Route path="/" element={<DashboardWrapper />}>
    <Route index element={<Overview />} />
    <Route path="create-new-user" element={<CreateUser />} />
    <Route path="accounts" element={<Accounts />} />
    <Route path="deposit" element={<TransactPage />} />
    <Route path="withdraw" element={<TransactPage />} />
    <Route path="send-money" element={<SendMoney />} />
    <Route path="currency" element={<Currency />} />
  </Route>
);

export const customerRouter = (
  <Route path="/" element={<DashboardWrapper />}>
    <Route index element={<Overview />} />
    <Route path="send-money" element={<SendMoney />} />
    <Route path="buy-load" element={<BuyLoad />} />
    <Route path="budget" element={<BudgetApp />} />
    <Route path="goals" element={<Goals />} />
    <Route path="currency" element={<Currency />} />
  </Route>
);

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [activeRouter, setActiveRouter] = useState(customerRouter); // Initial state
  const [loginStatus, setLoginstatus]= useState(false)

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (!storedUserData) {
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("pageStatus", JSON.stringify(pageStatus))
      console.log("userData saved");
    }

    
  
  }, []);

  useEffect(() => {
    const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUserData) {
      setCurrentUser(currentUserData);
      setLoginstatus(currentUserData.loginStatus)
    }
      else if (currentUserData === null){
        setLoginstatus(false)
    }

    if (currentUser && currentUser.isAdmin !== undefined) {
      // Dynamically determine the activeRouter based on currentUser
      setActiveRouter(currentUser.isAdmin ? adminRouter : customerRouter);
    }
  }, [loginStatus]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoutes />}>{activeRouter}</Route>
      </Routes>
    </Router>
  );
}

export default App;