import { userData } from "../../../Data";
import { Currency } from "../../currency/Currency";

const totalBalance = userData
  .reduce((total, user) => total + parseFloat(user.balance), 0)
  .toFixed(2);
const nonAdminUsers = userData.filter((user) => !user.isAdmin);

const numberOfClients = nonAdminUsers.length;

export function AdminOverview() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="overview-admin">
      <div className="stats-container">
      <div className="deposit-container">
        <h1>Total Deposits</h1>
        <h2>₱{totalBalance}</h2>
      </div>

      <div className="clients-container">
        <h1>Number of Clients</h1>
        <h2>{numberOfClients}</h2>
      </div>
      </div>
      
      <Currency/>
    </div>
    
  );
}