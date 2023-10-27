import React, { useContext } from "react";
import { GlobalContext } from "./GlobalState";

export function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li>
      {transaction.text}{" "}
      <span>
        {sign}₱{Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransaction(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
}
