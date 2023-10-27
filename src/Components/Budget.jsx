import React, { useState, useContext } from "react";
import { GlobalContext } from "./GlobalState";
import { Transaction } from "./Transaction";

function BalanceAndIncomeExpenses() {
  const { transaction } = useContext(GlobalContext);

  const amounts = transaction.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="budget-top">
      <div className="budget-nav">
        <h1 className="budget-title"> Budget Tracker </h1>
      </div>
      <div className="BalanceAndIncomeExpenses">
        <div className="inc-exp-container">
          <div>
            <p className="BalInExp-p">₱{total}</p>
            <h4 className="BalInExp">Current Balance</h4>
          </div>
          <div>
            <p className="BalInExp-p">₱{income}</p>
            <h4 className="BalInExp">Balance</h4>
          </div>
          <div>
            <p className="BalInExp-p">₱{expense}</p>
            <h4 className="BalInExp">Total Expenses</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

function TransactionList() {
  const { transaction } = useContext(GlobalContext);
  return (
    <>
      <hr></hr>
      <h3 className="htr-title">History</h3>
      <ul className="list">
        {transaction.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);
    console.log(newTransaction);
  };

  return (
    <div className="add-trans">
      <hr></hr>
      <h3 className="add-title">Add Transaction</h3>
      <form onSubmit={onSubmit} className="add-trans-form">
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Description"
            className="tran-input"
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Cost"
            className="tran-input"
          />
        </div>
        <div className="btn-form">
          <button className="btn-trans">Add</button>
        </div>
      </form>
    </div>
  );
}

export { BalanceAndIncomeExpenses, TransactionList, AddTransaction };
