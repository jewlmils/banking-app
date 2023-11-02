// Goals.jsx
import "../style/budget.css";
import React, { useState } from "react";
export function Goals() {
  const [gName, setGName] = useState("");
  const [gAmount, setGAmount] = useState(null);
  const [goal, setGoal] = useState([]);
  const [gEditID, setGEditID] = useState(null);

  const addGoals = (e) => {
    e.preventDefault();

    if (gName.trim() === "" || gAmount.trim() === "") {
      window.alert("Name and Amount are required.");
      return;
    }

    const parsedgAmount = parseFloat(gAmount);
    //to make sure na di negative number
    if (parsedgAmount < 0) {
      window.alert("Amount cannot be a negative number.");
      return;
    }

    if (gEditID) {
      const newGoal = goal.map((g) =>
        g.id === gEditID ? { id: gEditID, gName, gAmount } : g
      );
      setGoal(newGoal);
      setGEditID(null);
    } else {
      setGoal([
        ...goal,
        { id: Math.floor(Math.random() * 1000000), gName, gAmount },
      ]);
    }
    setGName("");
    setGAmount("");
  };

  const ghandleEdit = (g) => {
    setGEditID(g.id);
    setGName(g.gName);
    setGAmount(g.gAmount);
  };

  const ghandleDelete = (id) => {
    setGoal(goal.filter((g) => g.id !== id));
  };

  return (
    <div className="goals-container">
      <div>
        <div className="goal-top">
          <h1>Set up your goal</h1>
          <h3>"Hit your goals out of the park</h3>
          <p>Create 5 goals at a time.</p>
          <form onSubmit={addGoals} className="goal-form">
            <input
              value={gName}
              onChange={(e) => setGName(e.target.value)}
              type="text"
              className="gname"
              placeholder="Enter goal name"
            />
            <input
              value={gAmount}
              onChange={(e) => setGAmount(e.target.value)}
              type="number"
              className="gamount"
              placeholder="Enter goal amount"
            />
            <button className="goal-button">Go</button>
          </form>
        </div>
        <table className="goal-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {goal.map((g) => (
              <tr key={g.id}>
                <td>{g.gName}</td>
                <td>{g.gAmount}</td>
                <td>
                  <button
                    className="goal-action-e"
                    onClick={(e) => ghandleEdit(g)}
                  >
                    Edit
                  </button>
                  <button
                    className="goal-action-d"
                    onClick={(e) => ghandleDelete(g.id)}
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
  );
}
