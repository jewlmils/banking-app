import { userRole, currentUser, userData } from "../Data";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function Overview() {
  return (
          <>
          {userRole === "admin" ? <AdminOverview /> : <CustomerOverview />}
          </>     
  );
}
// Calculate the total balance
const totalBalance = userData.reduce((total, user) => total + parseFloat(user.balance), 0).toFixed(2);
const nonAdminUsers = userData.filter(user => !user.isAdmin);

// Get the number of non-admin users
const numberOfClients = nonAdminUsers.length;


function AdminOverview() {
  return (
    <div className="overview-admin">
      <h1 className="content-title">Total Income</h1>
      <h1 className="content-amount">₱{totalBalance}</h1>
      <div><h1>Total Clients</h1>
      <h2>{numberOfClients}</h2></div>
    </div>
  );
}

function CustomerOverview() {
  return (
    <div className="overview-customer">
      <div className="card-container">
        <span className="card-account-number">123-456-7890</span>
        <span className="card-balance">₱{currentUser &&currentUser.balance}</span>
        <span className="card-name">{currentUser &&currentUser.fullName}</span>
        <span className="card-expiration">10/28</span>
      </div>
      <div className="transaction-container">
        <span className="transaction-title">Transaction History</span>
        <div className="transaction-history"></div>
      </div>
    </div>
  );
}
