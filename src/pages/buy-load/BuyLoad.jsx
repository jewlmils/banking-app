import React, { useState } from "react";

export function BuyLoad() {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [transactionStatus, setTransactionStatus] = useState("");
  const [recipientError, setRecipientError] = useState("");

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

  const isPurchaseButtonDisabled = recipient.trim() === "" || amount <= 0 || recipientError !== "";

  const validateRecipient = (value) => {
    if (/^09\d{9}$/.test(value)) {
      setRecipientError(""); // Clear the error message
    } else {
      setRecipientError("Enter valid number");
    }
  };
  const handleRecipientBlur = () => {
    // Hide the error message when the input field loses focus
    if (recipientError) {
      setRecipientError("");
    }
  };

  return (
    <div className="buyload-container">
      <h2>Purchase Load</h2>
      <div className="input-section">
        <label htmlFor="recipient">Recipient</label>
        <input
          type="text"
          id="recipient"
          placeholder="Enter 11-digit phone number"
          maxLength="11"
          required
          value={recipient}
          onChange={(e) => {
            setRecipient(e.target.value);
            validateRecipient(e.target.value);
          }}
          onBlur={handleRecipientBlur} // Add onBlur event to hide the error message
        />
        {recipientError && <p className="error-message">{recipientError}</p>}
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
};