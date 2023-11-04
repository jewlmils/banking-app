import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export function SendMoney() {
  return (
    <div className="fund-transfer">
      <h1>Send Money</h1>
      <div className="form">
        <label htmlFor="sender">Sender:</label>
        <select id="sender" name="sender">
          <option value="SENDER">Select Sender</option>
        </select>

        <label htmlFor="current-balance">Current Balance:</label>
        <input
          type="text"
          id="current-balance"
          name="current-balance"
          readOnly
        />

        <label htmlFor="receiver">Receiver:</label>
        <select id="receiver" name="receiver">
          <option value="RECEIVER">Select Recipient</option>
        </select>

        <label htmlFor="receiver-balance">Receiver Current Balance:</label>
        <input
          type="text"
          id="receiver-balance"
          name="receiver-balance"
          readOnly
        />

        <label htmlFor="amount-to-transfer">Amount to Transfer:</label>
        <input type="text" id="amount-to-transfer" name="amount-to-transfer" />

        <button type="submit">Transfer Fund</button>
      </div>
    </div>
  );
}
