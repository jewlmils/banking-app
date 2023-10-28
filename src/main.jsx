import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserCreationForm from "./components/UserCreationForm";
import AccountsTable from "./components/AccountsTable";
import "./components/AccountsTable.css";
import "./components/UserCreationForm.css";

function App() {
  const [userData, setUserData] = useState([]);

  const handleFormSubmit = (newUser) => {
    const accountNumber = userData.length + 1;

    const userWithAccountNumber = { ...newUser, accountnumber: accountNumber };

    setUserData([...userData, userWithAccountNumber]);
  };

  return (
    <div>
      <UserCreationForm onFormSubmit={handleFormSubmit} />
      <AccountsTable data={userData} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
