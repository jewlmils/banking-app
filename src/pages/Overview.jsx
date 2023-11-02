import { userRole, currentUser, userData } from "../Data";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function Overview() {
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            {userRole === "admin" ? <AdminOverview /> : <CustomerOverview />}
          </div>
        </section>
      </main>
    </div>
  );
}
// Calculate the total balance
const totalBalance = userData.reduce((total, user) => total + parseFloat(user.balance), 0).toFixed(2);



function AdminOverview() {
  return (
    <div className="overview-admin">
      <h1 className="content-title">Total Money</h1>
      <h1 className="content-amount">₱{totalBalance}</h1>
    </div>
  );
}

function CustomerOverview() {
  return (
    <div className="overview-customer">
      <div className="card-container">
        <span className="card-account-number">123-456-7890</span>
        <span className="card-balance">₱{currentUser.balance}</span>
        <span className="card-name">{currentUser.fullName}</span>
        <span className="card-expiration">10/28</span>
      </div>
      <div className="transaction-container">
        <span className="transaction-title">Transaction History</span>
        <div className="transaction-history"></div>
      </div>
    </div>
  );
}
