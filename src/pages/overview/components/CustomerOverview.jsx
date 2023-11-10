import { useState, useEffect } from "react";
import { Currency } from "../../currency/Currency";

export function CustomerOverview() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [getBalance, setGetBalance] = useState(0);
  const [nameDisplay, setNameDisplay] = useState(0);
  const [accountNumberDisplay, setAccountNumberDisplay] = useState(0);
  const [accountType, setAccountType] = useState(0);

  useEffect(() => {
    setGetBalance(user.balance);
  }, [user.balance]);

  useEffect(() => {
    setNameDisplay(user.fullName);
  }, [user.fullName]);

  useEffect(() => {
    setAccountNumberDisplay(user.accountNumber);
  }, [user.accountNumber]);

  useEffect(() => {
    setAccountType(user.accountType);
  }, [user.accountType]);

  const formattedBalance = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
  }).format(getBalance);

  return (
    <div className="overview-customer">
      <div className="card-container">
        <span className="card-account-number">{accountNumberDisplay}</span>
        <span className="card-balance">{formattedBalance}</span>
        <span className="card-name">{nameDisplay}</span>
        <span className="card-expiration">10/28</span>
        <span className="account-type">{accountType}</span>
      </div>
      <div className="currency-container">
        <Currency />
      </div>
    </div>
  );
}
