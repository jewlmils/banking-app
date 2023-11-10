import React, { useState } from 'react';


export function SendMoney() {
  // State variables
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');

  const handlePurchase = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const userData = JSON.parse(localStorage.getItem("userData"));

    // Find the recipient user in userData based on the provided account number
    const recipientUser = userData.find((user) => user.accountNumber === recipient);

    if (!recipientUser) {
      setTransactionStatus("Recipient not found");
      return;
    }

    if (amount > 0 && amount <= currentUser.balance) {
      // Deduct the amount from the currentUser and add it to the recipient's balance
      currentUser.balance -= amount;
      recipientUser.balance += amount;

      // Save the updated currentUser and recipientUser back to localStorage
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

  const isPurchaseButtonDisabled = recipient.trim() === "" || amount.trim() === "" || amount <= 0;

  return (
    <div className="send-money">
      <h2>Send Money</h2>
      <div className="input-section">
        <label htmlFor="accountnumber">Account Number</label>
        <input
          type="text"
          id="recipient"
          placeholder="Enter Account Number"
          maxLength="13"
          pattern="[0-9]{13}"
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
        Proceed
      </button>
      {transactionStatus && <p>{transactionStatus}</p>}
    </div>
  );
}
