import { useState, useEffect } from "react";

export function CustomerOverview() {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const [balanceDisplay, setbalanceDisplay] = useState();
    const [nameDisplay, setNameDisplay] = useState();
    useEffect(() => {
      setbalanceDisplay(user.balance);
    }, [user.balance]);
  
    useEffect(() => {
      setNameDisplay(user.fullName);
    }, [user.fullName]);
  
    return (
      <div className="overview-customer">
        <div className="card-container">
          <span className="card-account-number">123-456-7890</span>
          <span className="card-balance">₱{balanceDisplay}</span>
          <span className="card-name">{nameDisplay}</span>
          <span className="card-expiration">10/28</span>
        </div>
        <div className="transaction-container">
          <span className="transaction-title">Transaction History</span>
          <div className="transaction-history"></div>
        </div>
      </div>
    );
  }
  