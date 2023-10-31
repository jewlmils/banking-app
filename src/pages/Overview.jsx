import { userRole } from "../App.jsx";

export function Overview() {
  return <>{userRole === "admin" ? <AdminOverview /> : <CustomerOverview />}</>;
}

function AdminOverview() {
  return (
    <>
      <h1 className="content-title">Total Money</h1>
      <h1 className="content-amount">$2,000,000</h1>
    </>
  );
}

function CustomerOverview() {
  return (
    <>
      <div className="card-container">
        <span className="card-account-number">123-456-7890</span>
        <span className="card-balance">₱10,000.00</span>
        <span className="card-name">Daenerys Targaryen</span>
        <span className="card-expiration">10/28</span>
      </div>
      <div className="transaction-container">
        <span className="transaction-title">Transaction History</span>
        <div className="transaction-history"></div>
      </div>
    </>
  );
}
