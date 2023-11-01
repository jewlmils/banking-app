import React, { useState } from "react";
import { BudgetApp } from "./BudgetApp";

export function BudgetWrapper() {
  const [client, setClient] = useState(null);
  const [error, setError] = useState("");

  const updateBalance = (newBalance) => {
    setClient({ ...client, balance: newBalance });
  };

  return (
    <BudgetApp
      user={client}
      balance={client ? client.balance : 0}
      updateBalance={updateBalance}
    />
  );
}
