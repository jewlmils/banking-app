import React, { useState, useEffect } from "react";
import BudgetModal from "./BudgetModal";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

function BudgetApp() {
  const [dsc, setDsc] = useState("");
  const [cost, setCost] = useState("");
  const [budget, setBudget] = useState([]);
  const [editId, setEditId] = useState(null);
  const [originalCost, setOriginalCost] = useState(null);
  const [isAddBudgetVisible, setIsAddBudgetVisible] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    setUser(currentUser);
  }, []);

  //This prevents the component from rendering when no user data is available
  if (!user) {
    return null;
  }

  // Function to toggle the visibility of the budget entry modal
  const toggleAddBudgetVisibility = () => {
    setIsAddBudgetVisible(!isAddBudgetVisible);
    setDsc("");
    setCost("");
    setError("");
  };

  // Function to add a budget item to the list
  const addBudget = (e) => {
    e.preventDefault();

    // Validate input for description and cost
    if (dsc.trim() === "" || cost.trim() === "") {
      setError("Description and Cost are required.");
      return;
    }

    const parsedCost = parseFloat(cost);

    // Ensure cost is not a negative number
    if (parsedCost < 0) {
      setError("Cost cannot be a negative number.");
      return;
    }

    setError("");

    if (editId) {
      // If in edit mode, update the budget item
      const newBudget = budget.map((b) =>
        b.id === editId ? { id: editId, dsc, cost } : b
      );
      setBudget(newBudget);
      setEditId(null);

      // Update the user's balance
      const difference = originalCost - parsedCost;
      const newBalance = user.balance + difference;
      updateBalance(newBalance);
    } else {
      // New budget item, add it to the list
      const newBudgetItem = { id: Date.now(), dsc, cost: parsedCost };
      setBudget([...budget, newBudgetItem]);
      const newBalance = user.balance - parsedCost;
      updateBalance(newBalance);
    }

    // Clear input fields and hide the modal
    setDsc("");
    setCost("");
    setOriginalCost(null);
    setIsAddBudgetVisible(false);
  };

  // Function to handle editing a budget item
  const handleEdit = (b) => {
    setEditId(b.id);
    setDsc(b.dsc);
    setCost(b.cost);
    setOriginalCost(b.cost);
    setIsAddBudgetVisible(true);
  };

  // Function to handle deleting a budget item
  const handleDelete = (id) => {
    const deletedBudgetItem = budget.find((b) => b.id === id);
    const newBalance = user.balance + parseFloat(deletedBudgetItem.cost);
    updateBalance(newBalance);
    setBudget(budget.filter((b) => b.id !== id));
  };

  // Function to update the user's balance in local storage and state
  const updateBalance = (newBalance) => {
    user.balance = newBalance;
    const updatedUser = JSON.parse(localStorage.getItem("currentUser"));
    updatedUser.balance = newBalance;
    localStorage.setItem("currentUser", JSON.stringify(updatedUser));
  };

  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            {" "}
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

              <div className="budget-table-list-container">
              <table className="budget-table">
                <thead className="budget-table-wrapper">
                  <tr>
                    <th>Description</th>
                    <th>Cost</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {" "}
                  {/* Add this container */}
                  {budget.map((b) => (
                    <tr key={b.id} className="budget-li">
                      <td>{b.dsc}</td>
                      <td>
                        {b.cost.toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </td>
                      <td className="button-container">
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
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
export { BudgetApp };
