import { userRole, currentUser, userData } from "../Data";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";
import { useState, useEffect } from "react";

export function Overview() {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  const [overviewDisplay, setOverviewDisplay] = useState();
  useEffect(()=>{
    setOverviewDisplay(user.isAdmin? <AdminOverview /> : <CustomerOverview />)
  },[user.isAdmin])

  return <>{overviewDisplay}</>;
}
// Calculate the total balance
const totalBalance = userData
  .reduce((total, user) => total + parseFloat(user.balance), 0)
  .toFixed(2);
const nonAdminUsers = userData.filter((user) => !user.isAdmin);

// Get the number of non-admin users
const numberOfClients = nonAdminUsers.length;

function AdminOverview() {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  return (
    <div className="overview-admin">
      <div className="deposit-container">
        <h1>Total Deposit</h1>
        <h2>₱{totalBalance}</h2>
      </div>

      <div className="clients-container">
        <h1>Total Clients</h1>
        <h2>{numberOfClients}</h2>
      </div>
    </div>
  );
}

function CustomerOverview() {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  const [balanceDisplay, setbalanceDisplay] = useState();
  const [nameDisplay, setNameDisplay] = useState();
  useEffect(()=>{
    setbalanceDisplay(user.balance)
  },[user.balance])

  useEffect(()=>{
    setNameDisplay(user.fullName)
  },[user.fullName])


  return (
    <div className="overview-customer">
      <div className="card-container">
        <span className="card-account-number">123-456-7890</span>
        <span className="card-balance">
          ₱{balanceDisplay}
        </span>
        <span className="card-name">{nameDisplay}</span>
        <span className="card-expiration">10/28</span>
      </div>
      <div className="transaction-container">
        <span className="transaction-title">Transaction History</span>
        <div className="transaction-history"></div>
      </div>
    </div>
  );
}
