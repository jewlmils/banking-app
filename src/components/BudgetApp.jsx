import React, { useState } from "react";
import "../style/budget.css";
import BudgetModal from "./BudgetModal";

function BudgetApp({ user, balance, handleLogout, updateBalance }) {
  const [dsc, setDsc] = useState("");
  const [cost, setCost] = useState("");
  const [budget, setBudget] = useState([]);
  const [editId, setEditId] = useState(null);
  const [originalCost, setOriginalCost] = useState(null);

  const [isAddBudgetVisible, setIsAddBudgetVisible] = useState(false);
  const [error, setError] = useState(""); // State variable for error message

  const toggleAddBudgetVisibility = () => {
    setIsAddBudgetVisible(!isAddBudgetVisible);
    setDsc("");
    setCost("");
    setError("");
  };

  const addBudget = (e) => {
    e.preventDefault();

    if (dsc.trim() === "" || cost.trim() === "") {
      setError("Description and Cost are required.");
      return;
    }

    const parsedCost = parseFloat(cost);
    if (parsedCost < 0) {
      setError("Cost cannot be a negative number.");
      return;
    }

    setError(""); // Clear any previous error messages

    if (editId) {
      // Existing budget item, update it
      const newBudget = budget.map((b) =>
        b.id === editId ? { id: editId, dsc, cost } : b
      );
      setBudget(newBudget);
      setEditId(null);

      const difference = originalCost - parsedCost;
      const newBalance = user.balance + difference;
      updateBalance(newBalance);
    } else {
      // New budget item, add it
      const newBudgetItem = { id: Date.now(), dsc, cost: parsedCost };
      setBudget([...budget, newBudgetItem]);
      const newBalance = user.balance - parsedCost;
      updateBalance(newBalance);
    }

    setDsc("");
    setCost("");
    setOriginalCost(null);

    setIsAddBudgetVisible(false);
  };

  const handleEdit = (b) => {
    setEditId(b.id);
    setDsc(b.dsc);
    setCost(b.cost);
    setOriginalCost(b.cost);
    setIsAddBudgetVisible(true);
  };

  const handleDelete = (id) => {
    const deletedBudgetItem = budget.find((b) => b.id === id);
    const newBalance = user.balance + parseFloat(deletedBudgetItem.cost);
    updateBalance(newBalance);
    setBudget(budget.filter((b) => b.id !== id));
  };

  return (
    <div className="admin-page">
      <div className="budget-top">
        <div className="budget-intro">
          <div className="budget-user-logout">
            <h4>Hello, {user.fullName}!</h4>
            <button className="budget-logout" onClick={handleLogout}>Logout</button>
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

      <BudgetModal
        isAddBudgetVisible={isAddBudgetVisible}
        toggleAddBudgetVisibility={toggleAddBudgetVisibility}
        dsc={dsc}
        setDsc={setDsc} 
        cost={cost}
        setCost={setCost}
        addBudget={addBudget}
        error={error}
      />

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
              <td className=".button-container">
                <button
                  onClick={() => handleEdit(b)}
                  className="budget-action-e"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(b.id)}
                  className="budget-action-d"
                >
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

export { BudgetApp };