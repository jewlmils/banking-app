import React, { useState, useEffect } from "react";
import BudgetModal from "./BudgetModal";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { currentUser } from "../../Data";
import { json } from "react-router-dom";
import { FileEdit, Trash2 } from "lucide-react";

function BudgetApp() {
  const [dsc, setDsc] = useState("");
  const [cost, setCost] = useState("");
  const [budget, setBudget] = useState(
    JSON.parse(localStorage.getItem("expenseList") || "[]")
  );
  const [editId, setEditId] = useState(null);
  const [originalCost, setOriginalCost] = useState(null);
  const [isAddBudgetVisible, setIsAddBudgetVisible] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    localStorage.setItem("expenseList", JSON.stringify(budget));
  }, [budget]);

  const userFromStorage = userData.find(
    (userFromStorage) => userFromStorage.email === currentUser.email
  );

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  if (!user) {
    return null;
  }

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

    setError("");
    if (editId) {
      // if in edit mode, update the budget item
      const newBudget = budget.map((b) =>
        b.id === editId ? { id: editId, dsc, cost } : b
      );
      setBudget(newBudget);
      setEditId(null);

      // update the user's balance
      const difference = originalCost - parsedCost;
      const newBalance = user.balance + difference;
      updateBalance(newBalance);
    } else {
      // new budget item, add it to the list
      const newBudgetItem = {
        id: Date.now(),
        dsc,
        cost: parsedCost,
        email: currentUser.email,
      };
      setBudget([...budget, newBudgetItem]);
      const newBalance = user.balance - parsedCost;
      updateBalance(newBalance);
    }

    // clear input fields and hide the modal
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

  const updateBalance = (newBalance) => {
    user.balance = newBalance;
    const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
    updatedUser.balance = newBalance;
    userFromStorage.balance = newBalance;
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  return (
    <div className="budget-page">
      <div className="budget-top">
        <div className="budget-intro">
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
        <thead className="budget-table-head">
          <tr>
            <th>Description</th>
            <th>Cost</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="budget-table-body">
          {/* Your comment here */}
          {budget.map(
            (b) =>
              b.email === currentUser.email && (
                <tr key={b.id} className="budget-li">
                  <td>{b.dsc}</td>
                  <td>
                    {b.cost.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="button-container">
                    <FileEdit
                      onClick={() => handleEdit(b)}
                      className="budget-action-e"
                    />
                    <Trash2
                      onClick={() => handleDelete(b.id)}
                      className="budget-action-d"
                    />
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
export { BudgetApp };
