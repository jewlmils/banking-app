import React, { useEffect, useState } from "react";
import { currentUser } from "../Data";
import { LogIn, FileEdit, Trash2 } from 'lucide-react';

export function Goals() {
  const [gName, setGName] = useState("");
  const [gAmount, setGAmount] = useState();
  const [goal, setGoal] = useState(
    JSON.parse(localStorage.getItem("goalList") || "[]")
  );
  const [gEditID, setGEditID] = useState("");

  useEffect(() => {
    localStorage.setItem("goalList", JSON.stringify(goal));
  }, [goal]);

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
        g.id === gEditID
          ? { id: gEditID, gName, gAmount, email: currentUser.email }
          : g
      );
      setGoal(newGoal);
      setGEditID(null);
    } else {
      setGoal([
        ...goal,
        { id: Date.now(), gName, gAmount, email: currentUser.email },
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
      <div className="goal-top">
        <div className="goal-intro-form">
          <div className="goal-intro">
            <h1>Set up your goal</h1>
            <h3>Hit your goals out of the park.</h3>
          </div>
          <form onSubmit={addGoals} className="goal-form">
            <input
              value={gName}
              onChange={(e) => setGName(e.target.value)}
              type="text"
              className="gname"
              placeholder="Enter goal name"
            />
            <div className="input-enter-goal">
            <input
              value={gAmount}
              onChange={(e) => setGAmount(e.target.value)}
              type="number"
              className="gamount"
              placeholder="Enter goal amount"
            />
            <LogIn className="goal-button" />
           </div>
          </form>
        </div>
      </div>
      <div className="goal-table-list-container">
        <table className="goal-table">
          <thead className="goal-table-wrapper">
            <tr>
              <th>Name</th>
              <th>Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {goal.map(
              (g) =>
                g.email === currentUser.email && (
                  <tr key={g.id}>
                    <td>{g.gName}</td>
                    <td>{g.gAmount}</td>
                    <td className="gbutton-container">
                      <FileEdit
                        className="goal-action-e"
                        onClick={(e) => ghandleEdit(g)}
                      />
                      <Trash2
                        className="goal-action-d"
                        onClick={(e) => ghandleDelete(g.id)}
                      />
                    </td>
                  </tr>
                )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
