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

import {Route, Routes} from "react-router-dom"

function App() {
  
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <Routes>
              <Route path='/' element={<Overview/>}/>
              <Route path='/create-new-user' element={<CreateUser/>}/>
              <Route path='/accounts' element={<Accounts/>}/>
              <Route path='/deposit' element={<Deposit/>}/>
              <Route path='/withdraw' element={<Withdraw/>}/>
              <Route path='/send-money' element={<SendMoney/>}/>
              <Route path='/currency' element={<Currency/>}/>
            </Routes>

          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
