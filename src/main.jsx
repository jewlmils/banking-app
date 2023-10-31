import React, { useState } from "react";
import ReactDOM from "react-dom";
import UserCreationForm from "./components/UserCreationForm";
import AccountsTable from "./components/AccountsTable";
import "./components/AccountsTable.css";
import "./components/UserCreationForm.css";
import { userData } from "./components/Data";

function App() {
  const [userDataState, setUserDataState] = useState(userData);

  return (
    <div>
      <UserCreationForm
        userData={userDataState}
        setUserData={setUserDataState}
      />
      <AccountsTable data={userDataState} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
