import React, { useEffect, useState } from "react";
import { CurrencyRow } from "./CurrencyRow";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function Currency() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState("PHP");
  const [toCurrency, setToCurrency] = useState("USD");
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromFromCurrency] = useState(true);

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => {
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setExchangeRate(data.rates[toCurrency]);
      });
  }, [toCurrency]);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]);

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromFromCurrency(false);
  }

  const fromAmount = amountInFromCurrency
    ? amount
    : (amount / exchangeRate).toFixed(2);
  const toAmount = amountInFromCurrency
    ? (amount * exchangeRate).toFixed(2)
    : amount;

  return (
    <div className="currency-container">
      <div className="currency-inner-cont">
        <h1>Currency Converter</h1>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className="currency__equals">=</div>
        <CurrencyRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
    </div>
  );
}
