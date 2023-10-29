import { useState } from "react";
import Data from './data';

const TransactPage = (props) =>{
 
    //const Data = localStorage.getItem("users");
    const transactionType= props.transactionType;
    const [isDisabled, setIsDisabled] = useState(true);
    const [addAmountDisabled, setAddAmountDisabled] = useState(true);
    const [accountName, setAccountName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState(0);
    const [isAccountNameFound, setIsAccountNameFound] = useState(true);
    const [isAccountNumberFound, setIsAccountNumberFound] = useState(true);
    const [inputAmount, setInputAmount] = useState(0);
    const [transactionStatus, setTransactionStatus] = useState({msg: `Provide the designated account to ${transactionType} money.`, style: 'notif'});

    const findAccount = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();            
            if(e.currentTarget.className === "account_name"){
                for(const data of Data) {
                    if(data.fullname === e.target.value) {
                        setAccountName(data.fullname);
                        setIsDisabled(false);
                        setIsAccountNameFound(true);
                        return data;
                    }
                }
                setIsAccountNameFound(false);
            } else{
                for(const data of Data) {
                    if(accountName === data.fullname && data.number == e.target.value) {
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

    const toDeposit = (e) => {
        e.preventDefault()
        for(const data of Data) {
            if(accountName === data.fullname && data.number == accountNumber && inputAmount >= 100) {
                data.balance = parseFloat(inputAmount) + data.balance;
                setBalance(data.balance.toFixed(2));

                setTransactionStatus({msg: "Deposit Confirmed", style: "success"});
                //Change localstorage key
                localStorage.setItem("users", JSON.stringify(Data));

                setInputAmount("");

                return data;
            }
        }
        setTransactionStatus({msg:"Deposit was not successful.", style: "failed"});
    }

    const toWithdraw = (e) =>{
        e.preventDefault()
        for(const data of Data) {
            if(accountName === data.fullname && data.number == accountNumber && inputAmount >= 100) {
                
                if(data.balance < parseFloat(inputAmount)){
                    setTransactionStatus({msg:"Withdrawal was not successful.", style: "failed"});
                    return data;
                }

                data.balance = data.balance - parseFloat(inputAmount);

                setBalance(data.balance.toFixed(2));

                setTransactionStatus({msg: "Withdrawal Confirmed", style: "success"});
                //Change localstorage key
                localStorage.setItem("users", JSON.stringify(Data));

                setInputAmount("");

                return data;
            }
        }
        setTransactionStatus({msg:"Withdrawal was not successful.", style: "failed"});
    }

    const setDepositAmount = (e) => {
        setInputAmount(e.target.value);
    }

    const clearInputAmount = (e) => {
        setInputAmount("");
    }

    const Clear = () => {
        setInputAmount(0);
        setIsDisabled(true);
        setAccountNumber("");
        setBalance(0);
        setIsAccountNumberFound(true);
        setAddAmountDisabled(true);
        setTransactionStatus({msg: `Provide the designated account to ${transactionType} money.`, style: 'notif'});
    }

    const handleChange = (e) => {
        setBalance(0);
        setAccountNumber(e.target.value);
        setAddAmountDisabled(true);
        setTransactionStatus({msg: `Provide the designated account to ${transactionType} money.`, style: 'notif'});
    }

    return(
        <section id="main-content">
            <form id="form" onSubmit={transactionType === "deposit" ? toDeposit : toWithdraw}>
                <h1 class="page">{transactionType}</h1>
                <span class={`notif ${transactionStatus.style}`}>{transactionStatus.msg}</span>
                <div class="row">
                    <div class="column">
                        <label>Account Name</label>
                        <input type="text" onKeyDown={findAccount} onChange={Clear} class="account_name" required/>
                        <span class="account_errorNotif" hidden={isAccountNameFound}>No account found. Unable to fetch bank account details.</span>
                    </div>
                    <div class="column">
                        <label>Account Number</label>
                        <input type="number" value={accountNumber} onChange={handleChange} onKeyDown={findAccount} class="account_number" disabled={isDisabled} required/>
                        <span class="account_errorNotif" hidden={isAccountNumberFound}>The account name and account number provided do not match any existing account in our records.</span>
                    </div>
                </div>

                <div class="debit_amount">
                    <label>Current balance</label>
                    <input type="number" value={balance} class="current_balance" disabled />
                </div>
                
                <div class="debit_amount">
                    <label>Amount to deposit</label>
                    <input type="number" step=".01" onClick={clearInputAmount} value={inputAmount} class="input_amount" name="amount" onChange={setDepositAmount} disabled={addAmountDisabled} autoComplete="off" required/>
                </div>
                
                <div class="debit_button">
                    <button type="submit" class="btn">{transactionType}</button>
                </div>
                
            </form>
        </section>
    )
}

export default TransactPage;