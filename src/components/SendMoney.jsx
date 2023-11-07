import React, { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

function SendMoney() {
  const [sender, setSender] = useState(''); // State to track sender selection
  const [receiver, setReceiver] = useState(''); // State to track receiver selection
  const [amount, setAmount] = useState(''); // State to track the transfer amount
  const [error, setError] = useState(''); // State to store error messages

  // Retrieve userData from localStorage
  const userData = JSON.parse(localStorage.getItem('userData')) || [];

  const handleSenderChange = (e) => {
    setSender(e.target.value);
  };

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransfer = () => {
    if (sender === 'SENDER' || receiver === 'RECEIVER' || amount === '') {
      setError('Please fill out all fields.');
      return;
    }

    const senderUser = userData.find((user) => user.email === sender);
    const receiverUser = userData.find((user) => user.email === receiver);

    const transferAmount = parseFloat(amount);

    if (senderUser && receiverUser) {
      if (senderUser.balance >= transferAmount) {
        // Update balances for sender and receiver
        senderUser.balance -= transferAmount;
        receiverUser.balance += transferAmount;
        // Update userData in localStorage
        localStorage.setItem('userData', JSON.stringify(userData));
        setError('Transfer successful');
      } else {
        setError('Insufficient balance for the transfer');
      }
    } else {
      setError('Invalid sender or receiver');
    }
  };

  return (
    <div className="send-money">
      <h1>Send Money</h1>
      <div className="form">
        <label htmlFor="sender">Sender:</label>
        <select id="sender" name="sender" onChange={handleSenderChange} value={sender}>
          <option value="SENDER">Select Sender</option>
          {userData.map((user, index) => (
            <option key={index} value={user.email}>
              {user.fullName}
            </option>
          ))}
        </select>

        <label htmlFor="current-balance">Current Balance:</label>
        <input
          type="text"
          id="current-balance"
          name="current-balance"
          value={userData.find((user) => user.email === sender)?.balance}
          readOnly
        />

        <label htmlFor="receiver">Receiver:</label>
        <select id="receiver" name="receiver" onChange={handleReceiverChange} value={receiver}>
          <option value="RECEIVER">Select Receiver</option>
          {userData.map((user, index) => (
            <option key={index} value={user.email}>
              {user.fullName}
            </option>
          ))}
        </select>

        <label htmlFor="receiver-balance">Receiver Current Balance:</label>
        <input
          type="text"
          id="receiver-balance"
          name="receiver-balance"
          value={userData.find((user) => user.email === receiver)?.balance}
          readOnly
        />

        <label htmlFor="amount-to-transfer">Amount to Transfer:</label>
        <input
          type="text"
          id="amount-to-transfer"
          name="amount-to-transfer"
          value={amount}
          onChange={handleAmountChange}
        />

        <button type="button" onClick={handleTransfer}>
          Transfer Money
        </button>

        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default SendMoney;