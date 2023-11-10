import React, { useState, useEffect } from "react";
import { Currency } from "../../currency/Currency";

export function AdminOverview() {
  const [totalBalance, setTotalBalance] = useState(0);
  const [numberOfClients, setNumberOfClients] = useState(0);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    const nonAdminUsers = userData.filter((userData) => !userData.isAdmin);

    const calculatedTotalBalance = nonAdminUsers
      .reduce((total, userData) => total + parseFloat(userData.balance), 0)
      .toFixed(2);

    setTotalBalance(calculatedTotalBalance);
    setNumberOfClients(nonAdminUsers.length);
  }, [user.balance, (JSON.parse(localStorage.getItem("userData")))]); // Run the effect whenever user.balance or userData changes

  const formattedTotalBalance = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(totalBalance);

  return (
    <div className="overview-admin">
      <div className="stats-container">
        <div className="deposit-container">
          <h1>Total Deposits</h1>
          <h2>{formattedTotalBalance}</h2>
        </div>

        <div className="clients-container">
          <h1>Number of Clients</h1>
          <h2>{numberOfClients}</h2>
        </div>
      </div>

      <Currency />
    </div>
  );
}
