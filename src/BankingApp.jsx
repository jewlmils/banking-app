import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Iron Bank of Avion</h1>
      </div>
      <ul>
        <li className="titles">Overview</li>
        <li className="titles">Send Money</li>
        <li className="titles">Withdraw</li>
        <li className="titles">Budget</li>
        <li className="titles">Buy Load</li>
      </ul>
      <div className="sidebar-footer">
        <p>Logout</p>
      </div>
      <Expenses />
    </div>
  );
}

function Expenses() {
  return (
    <div className="budget">
      <h2 className="user">User</h2>
      <div className="content-expenses">
      <div className="container-expenses">
        <div className="nav">
          <h1>Budget</h1>
          <button>Add Expense</button>
        </div>
        <div className="balance-number">
          <ul className="balance">
            <li>
              <p class="number">$200</p>
            </li>
            <li>Total Expenses</li>
          </ul>
          <ul className="balance">
            <li>
              <p class="number">$200</p>
            </li>
            <li>Total Expenses</li>
          </ul>
          <ul className="balance">
            <li>
              <p class="number">$200</p>
            </li>
            <li>Total Expenses</li>
          </ul>
        </div>
        <hr />

        <div className="content-bottom">
          <p>Name</p>
          <p>Cost</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export { Sidebar, Expenses };
