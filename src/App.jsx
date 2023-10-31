import { useState } from "react";

import "./App.css";
import { Login } from "./pages/Login.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import { Overview } from "./pages/Overview.jsx";
import { CreateUser } from "./pages/CreateUser.jsx";
import { Accounts } from "./pages/Accounts.jsx";
import { Deposit } from "./pages/Deposit.jsx";
import { Withdraw } from "./pages/Withdraw.jsx";
import { SendMoney } from "./pages/SendMoney.jsx";
import { Currency } from "./pages/currency/Currency.jsx";
import { Budget } from "./pages/Budget.jsx";
import { BuyLoad } from "./pages/BuyLoad.jsx";
import { Goals } from "./pages/Goals.jsx";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "./utils/PrivateRoutes";

export const userRole = "user";
export const login  = true;

const adminRouter = (
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
const customerRouter = (
  <Routes>
    <Route>
      <Route path="/" element={<Overview />} />
      <Route path="/send-money" element={<SendMoney />} />
      <Route path="/buy-load" element={<BuyLoad />} />
      <Route path="/budget" element={<Budget />} />
      <Route path="/goals" element={<Goals />} />
      <Route path="/currency" element={<Currency />} />
    </Route>
  </Routes>
);


function Homepage(){
  const routes = userRole === "admin" ? adminRouter : customerRouter;
  return(<div className="body">
<Sidebar />
<main>
  <Header />
  <section className="content">
    <div className="content-container">{routes}</div>
  </section>
</main>
</div>)
} 

function App() {
  const pageDisplay = login ?  <Homepage/>: <Login/>;
  return (
    pageDisplay
  );
}

export default App;
