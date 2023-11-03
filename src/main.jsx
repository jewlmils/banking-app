import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserCreationForm from "./components/UserCreationForm";
import AccountsTable from "./components/AccountsTable";
import "./components/AccountsTable.css";
import "./components/UserCreationForm.css";
import { userData } from "./components/Data";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserCreationForm userData={userData} />
    <AccountsTable />
  </React.StrictMode>
);
