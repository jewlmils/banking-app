import React, { useEffect, useState } from "react";
import { userData } from "./Data";

function AccountsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState([]);

  function getUsersFromLocalStorage() {
    const userData = localStorage.getItem("userData");
    return JSON.parse(userData) || [];
  }

  useEffect(() => {
    setUserData(getUsersFromLocalStorage());
  }, []);

  function addUserToLocalStorage(newUser) {
    const existingUsers = getUsersFromLocalStorage();
    const updatedUsers = [...existingUsers, newUser];
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    setUserData(updatedUsers);
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter the userData array based on the search query
  const filteredData = userData.filter((user) => {
    const fullName = user.fullName ? user.fullName.toLowerCase() : ""; // Check if fullName is defined
    return fullName.includes(searchQuery.toLowerCase());
  });

  return (
    <div className="wrapper">
      <div className="searchBar">
        <input
          id="searchQueryInput"
          type="text"
          name="searchQueryInput"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button id="searchQuerySubmit" type="submit" name="searchQuerySubmit">
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="#666666"
              d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
            />
          </svg>
        </button>
      </div>

      <div className="accounts-table">
        <table>
          <thead>
            <tr>
              <th>Account Number</th>
              <th>Full Name</th>
              <th>Account Type</th>
              <th>Initial Balance</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((user, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{user.fullName}</td>
                <td>{user.accountType}</td>
                <td>{user.balance}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AccountsTable;
