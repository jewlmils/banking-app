export function CurrencyRow(props) {
    const {
      currencyOptions,
      selectedCurrency,
      onChangeCurrency,
      amount,
      onChangeAmount,
    } = props;
    return (
      <div>
        <input
          type="number"
          className="currency-input"
          value={amount}
          onChange={onChangeAmount}
        />
        <select value={selectedCurrency} onChange={onChangeCurrency}>
          {currencyOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
  