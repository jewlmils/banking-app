import React, { useState , useEffect} from 'react';


export function SendMoney() {
  // State variables
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionStatus, setTransactionStatus] = useState('');
  const[ userData, setUserData]= useState(JSON.parse(localStorage.getItem("userData")))
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(()=>{
    setUserData(JSON.parse(localStorage.getItem("userData")))
  },[currentUser.balance])
 

  const handlePurchase = () => {
  const recipientUser = userData.find((user) => user.accountNumber === recipient);

  if (!recipientUser) {
    setTransactionStatus('Recipient not found');
    return;
  }

  if (parseFloat(amount) > 0 && parseFloat(amount) <= parseFloat(currentUser.balance)) {
    
    currentUser.balance = parseFloat(currentUser.balance) - parseFloat(amount);

   
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    
    recipientUser.balance = parseFloat(recipientUser.balance) + parseFloat(amount);

    
    const updatedUserData = userData.map((user) =>
      user.accountNumber === recipient ? recipientUser : user
    );

    
    localStorage.setItem('userData', JSON.stringify(updatedUserData));

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
