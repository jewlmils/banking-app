import { useState } from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const TransactPage = (props) => {
  const Data = JSON.parse(localStorage.getItem("userData"));
  const transactionType = props.transactionType;
  const [transactionStatus, setTransactionStatus] = useState({
    msg: `Provide the designated account to ${transactionType} money.`,
    style: "notif",
  });
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [addAmountDisabled, setAddAmountDisabled] = useState(true);
  const [isAccountNameFound, setIsAccountNameFound] = useState(true);
  const [isAccountNumberFound, setIsAccountNumberFound] = useState(true);
  const [balance, setBalance] = useState(0);
  const [inputAmount, setInputAmount] = useState(0);

  let new_balance = 0;

  const findAccount = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (e.currentTarget.className === "account_name") {
        for (const data of Data) {
          if (data.fullName === e.target.value) {
            setAccountName(data.fullName);
            setIsDisabled(false);
            setIsAccountNameFound(true);

            return data;
          }
        }
        setIsAccountNameFound(false);
      } else {
        for (const data of Data) {
          if (accountName === data.fullName && data.number == e.target.value) {
            setBalance(data.balance);
            setAddAmountDisabled(false);
            setIsAccountNumberFound(true);

            return data;
          }
        }
        setIsAccountNumberFound(false);
      }
    }
  };

  const deposit = (user, amount) => {
    user.balance = parseFloat(amount) + user.balance;

    return user.balance;
  };

  const withdraw = (user, amount) => {
    user.balance = user.balance - parseFloat(amount);

    return user.balance;
  };

  const transact = (e) => {
    e.preventDefault();

    if (props.transactionType === "deposit") {
      for (const data of Data) {
        if (
          accountName === data.fullName &&
          data.number == accountNumber &&
          inputAmount >= 100
        ) {
          new_balance = deposit(data, inputAmount);

          setBalance(new_balance.toFixed(2));
          setTransactionStatus({ msg: "Deposit Confirmed", style: "success" });
          setInputAmount("");

          localStorage.setItem("userData", JSON.stringify(Data));

          return new_balance;
        }
      }
      setTransactionStatus({
        msg: "Deposit was not successful.",
        style: "failed",
      });
    } else {
      for (const data of Data) {
        if (
          accountName === data.fullName &&
          data.number == accountNumber &&
          inputAmount >= 100
        ) {
          if (data.balance < parseFloat(inputAmount)) {
            setTransactionStatus({
              msg: "Withdrawal was not successful.",
              style: "failed",
            });

            return data;
          }

          new_balance = withdraw(data, inputAmount);

          setBalance(new_balance.toFixed(2));
          setTransactionStatus({
            msg: "Withdrawal Confirmed",
            style: "success",
          });
          setInputAmount("");

          localStorage.setItem("userData", JSON.stringify(Data));

          return new_balance;
        }
      }
      setTransactionStatus({
        msg: "Withdrawal was not successful.",
        style: "failed",
      });
    }
  };

  const setDepositAmount = (e) => {
    setInputAmount(e.target.value);
  };

  const clearInputAmount = (e) => {
    setInputAmount("");
  };

  const Clear = () => {
    setInputAmount(0);
    setIsDisabled(true);
    setAccountNumber("");
    setBalance(0);
    setIsAccountNumberFound(true);
    setAddAmountDisabled(true);
    setTransactionStatus({
      msg: `Provide the designated account to ${transactionType} money.`,
      style: "notif",
    });
  };

  const handleChange = (e) => {
    setBalance(0);
    setInputAmount(0);
    setAccountNumber(e.target.value);
    setAddAmountDisabled(true);
    setTransactionStatus({
      msg: `Provide the designated account to ${transactionType} money.`,
      style: "notif",
    });
  };

  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container"></div>
          <section id="main-content">
            <form id="form" onSubmit={transact}>
              <h1 className="page">{transactionType}</h1>
              <span className={`notif ${transactionStatus.style}`}>
                {transactionStatus.msg}
              </span>
              <div className="row">
                <div className="column">
                  <label>Account Name</label>
                  <input
                    type="text"
                    className="account_name"
                    name="account_name"
                    onKeyDown={findAccount}
                    onChange={Clear}
                    autoComplete="off"
                    required
                  />
                  <span
                    className="account_errorNotif"
                    hidden={isAccountNameFound}
                  >
                    No account found. Unable to fetch bank account details.
                  </span>
                </div>

                <div className="column">
                  <label>Account Number</label>
                  <input
                    type="number"
                    className="account_number"
                    name="account_number"
                    value={accountNumber}
                    onChange={handleChange}
                    onKeyDown={findAccount}
                    disabled={isDisabled}
                    autoComplete="off"
                    required
                  />
                  <span
                    className="account_errorNotif"
                    hidden={isAccountNumberFound}
                  >
                    The account name and account number provided do not match
                    any existing account in our records.
                  </span>
                </div>
              </div>

              <div className="debit_amount">
                <label>Current balance</label>
                <input
                  type="text"
                  className="current_balance"
                  name="current_balance"
                  value={`PHP ${balance}`}
                  disabled
                />
              </div>

              <div className="debit_amount">
                <label>Amount to {transactionType}</label>
                <input
                  type="number"
                  className="input_amount"
                  name="input_amount"
                  step=".01"
                  value={inputAmount}
                  onClick={clearInputAmount}
                  onChange={setDepositAmount}
                  disabled={addAmountDisabled}
                  autoComplete="off"
                  required
                />
              </div>

              <div className="debit_button">
                <button type="submit" className="btn">
                  {transactionType}
                </button>
              </div>
            </form>
          </section>
        </section>
      </main>
    </div>
  );
};

export default TransactPage;

<div className="body">
  <Sidebar />
  <main>
    <Header />
    <section className="content">
      <div className="content-container"></div>
    </section>
  </main>
</div>;
