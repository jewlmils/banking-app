import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function SendMoney() {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);
  
  const userData = JSON.parse(localStorage.getItem('userData')) || [];

  useEffect(() => {
    const storedCurrentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedCurrentUser) {
      setCurrentUser(storedCurrentUser);
      setSender(storedCurrentUser.email);
    }
  }, []);

  const handleSenderChange = (e) => {
    setSender(e.target.value);
  };

  const handleReceiverChange = (e) => {
    setReceiver(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const getCurrentBalance = () => {
    return userData.find((user) => user.email === sender)?.balance || 0;
  };

  const getReceiverBalance = () => {
    return userData.find((user) => user.email === receiver)?.balance || 0;
  };

  const handleTransfer = () => {
    setError(''); // Clear any previous error messages

    if (!sender || !receiver || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      setError('Please fill out all fields and provide a valid amount.');
      return;
    }

    const senderUser = userData.find((user) => user.email === sender);
    const receiverUser = userData.find((user) => user.email === receiver);

    if (!senderUser || !receiverUser) {
      setError('Invalid sender or receiver');
      return;
    }

    const transferAmount = parseFloat(amount);

    if (senderUser.balance < transferAmount) {
      setError('Insufficient balance for the transfer');
      return;
    }

    // Create a new array of users with updated balances
    const updatedUserData = userData.map((user) => {
      if (user.email === sender) {
        return { ...user, balance: user.balance - transferAmount };
      } else if (user.email === receiver) {
        return { ...user, balance: user.balance + transferAmount };
      }
      return user;
    });

    // Update userData in localStorage
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

    setError('Transfer successful');
  };

  
  return (
    <div className="send-money">
      <h1>Send Money</h1>
      <div className="form">
        <label htmlFor="sender">Sender:</label>
        <select id="sender" name="sender" onChange={handleSenderChange} value={sender}>
          <option value="">Select Sender</option>
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
          value={userData.find((user) => user.email === sender)?.balance || ''}
          readOnly
        />

        <label htmlFor="receiver">Receiver:</label>
        <select id="receiver" name="receiver" onChange={handleReceiverChange} value={receiver}>
          <option value="">Select Receiver</option>
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
          value={userData.find((user) => user.email === receiver)?.balance || ''}
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
};