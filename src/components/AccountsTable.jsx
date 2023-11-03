import React, { useEffect, useState } from "react";

function AccountsTable() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userData, setUserData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(-1);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    function getUsersFromLocalStorage() {
      const userDataJSON = localStorage.getItem("userData");
      if (userDataJSON) {
        return JSON.parse(userDataJSON);
      }
      return [];
    }

    setUserData(getUsersFromLocalStorage());
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = userData.filter((user) => {
    const fullName = user.fullName ? user.fullName.toLowerCase() : "";
    return fullName.includes(searchQuery.toLowerCase());
  });

  const handleEditUser = (index) => {
    setEditingIndex(index);
    setEditedUser({ ...userData[index] });
  };

  const handleUpdateUser = (index) => {
    const updatedUsers = [...userData];
    updatedUsers[index] = { ...editedUser };
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    setUserData(updatedUsers);
    setEditingIndex(-1);
  };

  const handleCancelEdit = () => {
    setEditingIndex(-1);
    setEditedUser({});
  };

  const handleEditInputChange = (key, value) => {
    setEditedUser((prevEditedUser) => ({ ...prevEditedUser, [key]: value }));
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = [...userData];
    updatedUsers.splice(index, 1);
    localStorage.setItem("userData", JSON.stringify(updatedUsers));
    setUserData(updatedUsers);
    setEditingIndex(-1);
  };

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
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedUser.fullName}
                      onChange={(e) =>
                        handleEditInputChange("fullName", e.target.value)
                      }
                    />
                  ) : (
                    user.fullName
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedUser.accountType}
                      onChange={(e) =>
                        handleEditInputChange("accountType", e.target.value)
                      }
                    />
                  ) : (
                    user.accountType
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="number"
                      value={editedUser.balance}
                      onChange={(e) =>
                        handleEditInputChange("balance", e.target.value)
                      }
                    />
                  ) : (
                    user.balance
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      value={editedUser.email}
                      onChange={(e) =>
                        handleEditInputChange("email", e.target.value)
                      }
                    />
                  ) : (
                    user.email
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <button onClick={() => handleUpdateUser(index)}>
                        Update
                      </button>
                      <button onClick={handleCancelEdit}>Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => handleEditUser(index)}>Edit</button>
                  )}
                </td>
                <td>
                  <button onClick={() => handleDeleteUser(index)}>
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

export default AccountsTable;
