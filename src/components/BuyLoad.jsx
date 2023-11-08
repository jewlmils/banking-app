import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function BuyLoad() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");

  const handlePurchase = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Find the user in userData
    const user = userData.find((user) => user.email === currentUser.email);

    // Ensure recipient is the same as the current user
    if (amount > 0 && amount <= currentUser.balance) {
      // Deduct the amount from both currentUser and userData
      currentUser.balance -= amount;
      user.balance -= amount;

      // Save the updated currentUser and userData back to localStorage
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
      localStorage.setItem("userData", JSON.stringify(userData));

      setTransactionStatus("Transaction successful");
    } else {
      setTransactionStatus("Insufficient balance or invalid amount");
    }

    // Clear the input fields after a transaction attempt
    setRecipient("");
    setAmount("");
  };

  const isPurchaseButtonDisabled = recipient.trim() === "" || amount <= 0;

  return (
    <div className="container">
      <h1>Eload</h1>
      <h2>Purchase Load</h2>
      <div className="input-section">
        <label htmlFor="recipient">Recipient</label>
        <input
          type="number"
          id="recipient"
          placeholder="Enter phone number"
          in="0"
          max="99999999999"
          pattern="[0-9]{11}"
          required
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
      </div>
      <div className="input-section">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button
        className="purchase-btn"
        onClick={handlePurchase}
        disabled={isPurchaseButtonDisabled}
      >
        Purchase Load
      </button>
      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
}