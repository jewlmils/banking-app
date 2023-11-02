import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserCreationForm from "./components/UserCreationForm";
import AccountsTable from "./components/AccountsTable";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserCreationForm />} />
        <Route path="/accounts" element={<AccountsTable />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
