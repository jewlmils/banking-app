import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header.jsx";
import { Overview } from "../pages/Overview";
import { CreateUser } from "../pages/createuser/CreateUser.jsx";
import { Accounts } from "../pages/accounts/Accounts.jsx";
import {TransactPage} from "../pages/transactPage/TransactPage.jsx"
import { SendMoney } from "../pages/send-money/SendMoney.jsx";
import { Currency } from "../pages/currency/Currency.jsx";
import { BudgetApp } from "../pages/budget/BudgetApp.jsx";
import { BuyLoad } from "../pages/buy-load/BuyLoad.jsx";
import { Goals } from "../pages/Goals.jsx";
import { Route, Routes } from "react-router-dom";
import { userRole } from "../Data";
import { PrivateRoutes } from "../utils/PrivateRoutes";

// export const login = currentUser.isAdmin;

export const adminRouter = (
  
    <Route>
      <Route path="/" element={<Overview />} />
      <Route path="/create-new-user" element={<CreateUser />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/deposit" element={<TransactPage transactionType='deposit' />} />
      <Route path="/withdraw" element={<TransactPage transactionType='withdraw'/>} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/currency" element={<Currency />} />
    </Route>
 
);
export const customerRouter = (

    <Route>
      <Route path="/" element={<Overview />} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/buy-load" element={<BuyLoad />} />
      <Route path="/budget" element={<BudgetApp />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/currency" element={<Currency />} />
    </Route>
);

export function Dashboard({ user, handleLogout, routes }) {
  return <Routes>{routes}</Routes>;
}
