import React from "react";
import { Route } from "react-router-dom";
import { DashboardWrapper } from "./DashboardWrapper.jsx";
import { Overview,CreateUser,Accounts,TransactPage,Currency,BudgetApp, SendMoney, BuyLoad,Goals} from "../pages";

export const adminRouter = (
  <Route path="/" element={<DashboardWrapper />}>
    <Route index element={<Overview />} />
    <Route path="create-new-user" element={<CreateUser />} />
    <Route path="accounts" element={<Accounts />} />
    <Route path="deposit" element={<TransactPage transactionType='deposit'/>} />
    <Route path="withdraw" element={<TransactPage transactionType='withdraw'/>} />
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
