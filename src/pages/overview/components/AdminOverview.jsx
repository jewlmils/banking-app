import { userData } from "../../../Data";

const totalBalance = userData
  .reduce((total, user) => total + parseFloat(user.balance), 0)
  .toFixed(2);
const nonAdminUsers = userData.filter((user) => !user.isAdmin);

const numberOfClients = nonAdminUsers.length;

export function AdminOverview() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  return (
    <div className="overview-admin">
      <div className="deposit-container">
        <h1>Total Deposit</h1>
        <h2>₱{totalBalance}</h2>
      </div>

      <div className="clients-container">
        <h1>Total Clients</h1>
        <h2>{numberOfClients}</h2>
      </div>
    </div>
  );
}