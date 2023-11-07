import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function BuyLoad() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");

  const deductBalanceFromUser = async (recipient, amount) => {
    // Simulate a delay (you can remove this in production)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Recipient:", recipient);
    console.log("Amount:", amount);

    // Validate input
    if (recipient.trim() === "") {
      setTransactionStatus("Recipient name is required");
      return { success: false };
    }

    if (amount <= 0) {
      setTransactionStatus("Amount must be greater than 0");
      return { success: false };
    }

    // Parse the current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log("Current Balance:", currentUser.balance);

    if (recipient === currentUser.email && amount <= currentUser.balance) {
      // Parse the userData array from localStorage
      const userData = JSON.parse(localStorage.getItem("userData"));

      // Find and update the user's balance in the userData array
      const user = userData.find((user) => user.email === currentUser.email);
      user.balance -= amount;
      currentUser.balance = user.balance;

      // Save the updated userData and currentUser back to localStorage
      localStorage.setItem("userData", JSON.stringify(userData));
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      return { success: true };
    } else {
      setTransactionStatus("Insufficient balance");
      return { success: false };
    }
  };

  const handlePurchase = async () => {
    try {
      const response = await deductBalanceFromUser(recipient, amount);

      if (response.success) {
        setTransactionStatus("Transaction successful");
      }

      // Clear the input fields after a transaction attempt
      setRecipient("");
      setAmount("");
    } catch (error) {
      console.error("Error during purchase:", error);
      setTransactionStatus("Transaction failed");
    }
  };

  const isPurchaseButtonDisabled = recipient.trim() === "" || amount <= 0;

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
      <button className="purchase-btn" onClick={handlePurchase} disabled={isPurchaseButtonDisabled}>
        Purchase Load
      </button>
      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
}
