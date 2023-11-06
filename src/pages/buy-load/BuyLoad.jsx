import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function BuyLoad() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handlePurchase = () => {
    // Implement your purchase logic here
    console.log("Purchase initiated:", recipient, amount);
  };

  return (
    <div className="container">
      <h1>Eload</h1>
      <h2>Purchase Load</h2>
      <div className="input-section">
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          placeholder="Enter recipient name"
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
      <button className="purchase-btn" onClick={handlePurchase}>
        Purchase Load
      </button>
    </div>
  );
}
