import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header.jsx";
import { Overview } from "../pages/Overview";
import { CreateUser } from "../pages/createuser/CreateUser.jsx";
import { Accounts } from "../pages/accounts/Accounts.jsx";
import { Deposit } from "../pages/Deposit.jsx";
import { Withdraw } from "../pages/Withdraw.jsx";
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
  <Routes>
    <Route>
      <Route path="/" element={<Overview />} />
      <Route path="/create-new-user" element={<CreateUser />} />
      <Route path="/accounts" element={<Accounts />} />
      <Route path="/deposit" element={<Deposit />} />
      <Route path="/withdraw" element={<Withdraw />} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/currency" element={<Currency />} />
    </Route>
  </Routes>
);
export const customerRouter = (
  <Routes>
    <Route>
      <Route path="/" element={<Overview />} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/buy-load" element={<BuyLoad />} />
      <Route path="/budget" element={<BudgetApp />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/currency" element={<Currency />} />
    </Route>
  </Routes>
);

export function Dashboard({ user, handleLogout, routes }) {
  return routes;
}
