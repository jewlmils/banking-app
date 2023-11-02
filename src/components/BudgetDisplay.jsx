// BudgetDisplay.jsx
import React from "react";

function BudgetDisplay({
  user,
  toggleAddBudgetVisibility,
  budget,
  dsc,
  cost,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="admin-page">
      <div className="budget-top">
        <div className="budget-intro">
          <div className="budget-user-logout">
            <h4>Hello, {user.fullName}!</h4>
            <button className="budget-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <h1>Budget App</h1>
          <p>Smart money habits start with our financial app</p>
        </div>
        <div className="budget-balance">
          <div className="add-btn">
            <button
              className="add-budget-btn"
              onClick={toggleAddBudgetVisibility}
            >
              Add Budget
            </button>
          </div>
          <div className="bgt-balance">
            <h3>Balance</h3>
            <h2>
              ₱
              {user.balance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h2>
          </div>
        </div>
      </div>

      <table className="budget-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {budget.map((b) => (
            <tr key={b.id}>
              <td>{b.dsc}</td>
              <td>
                {b.cost.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </td>
              <td className="button-container">
                <button onClick={() => handleEdit(b)} className="budget-action-e">
                  Edit
                </button>
                <button onClick={() => handleDelete(b.id)} className="budget-action-d">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BudgetDisplay;
