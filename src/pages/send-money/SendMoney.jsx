import React, { useState } from 'react';

export function SendMoney() {
  // State variables
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem("userData")))
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handlePurchase = () => {
    const recipientUser = userData.find((user) => user.accountNumber === recipient);
    const senderUser = userData.find((user) => user.accountNumber === currentUser.accountNumber);

    // Validation: Check if the recipient is the same as the sender
    if (recipientUser && recipientUser.accountNumber === senderUser.accountNumber) {
      setTransactionStatus('Cannot send money to yourself');
      return;
    }

    if (!recipientUser) {
      setTransactionStatus('Recipient not found');
      return;
    }

    if (parseFloat(amount) > 0 && parseFloat(amount) <= parseFloat(senderUser.balance)) {

      senderUser.balance = parseFloat(senderUser.balance) - parseFloat(amount);

      recipientUser.balance = parseFloat(recipientUser.balance) + parseFloat(amount);

      localStorage.setItem('userData', JSON.stringify(userData));
      localStorage.setItem('currentUser', JSON.stringify(senderUser));

      setTransactionStatus('Transaction successful');
    } else {
      setTransactionStatus('Insufficient balance or invalid amount');
    }

    // Clear the input fields after a transaction attempt
    setRecipient('');
    setAmount('');
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
