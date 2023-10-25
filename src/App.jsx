import { useState } from "react";
import "./App.css";
import { Sidebar } from "./components/Sidebar.jsx";
import { Header } from "./components/Header.jsx";
import { Overview } from "./components/pages/Overview.jsx";
import { CreateUser } from "./components/pages/CreateUser.jsx";
import { Accounts } from "./components/pages/Accounts.jsx";
import { Deposit } from "./components/pages/Deposit.jsx";
import { Withdraw } from "./components/pages/Withdraw.jsx";
import { SendMoney } from "./components/pages/SendMoney.jsx";
import { Currency } from "./components/pages/Currency.jsx";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Overview;
      break;
    case "/create-new-user":
      Component = CreateUser;
      break;
    case "/accounts":
      Component = Accounts;
      break;
    case "/deposit":
      Component = Deposit;
      break;
    case "/withdraw":
      Component = Withdraw;
      break;
    case "/send-money":
      Component = SendMoney;
      break;
    case "currency":
      Component = Currency;
      break;
  }
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <Component />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
