import React from "react";

function BudgetModal({
  isAddBudgetVisible,
  toggleAddBudgetVisibility,
  dsc,
  setDsc,
  cost,
  setCost,
  addBudget,
  error
}) {
  return (
    <div>
      {isAddBudgetVisible ? (
        <div className="budget-modal">
          <div className="budget-app">
            <h2>Edit Budget</h2>
            {error && <div className="error-message">{error}</div>}
            <form onSubmit={addBudget} className="budget-form">
              <input
                value={dsc}
                onChange={(e) => setDsc(e.target.value)}
                type="text"
                className="budget-input"
                placeholder="Description"
              />
              <input
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                type="number"
                className="budget-input"
                placeholder="Cost"
              />
              <div className="button-container">
                <button type="submit" className="budget-button">
                  Add
                </button>
                <button type="button" onClick={toggleAddBudgetVisibility} className="budget-button">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default BudgetModal;