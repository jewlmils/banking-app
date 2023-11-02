// authenticate.jsx

// Import React and necessary components and data
import React, { useState } from "react";
import { userData } from "../Data"; // Import user data from an external source (presumably an array of user objects)
import { Login } from "./Login"; // Import the Login component
import { Goals } from "./Goals";
import { Dashboard } from "./Dashboard"; // Import the Dashboard component
import "../style/budget.css"; // Import styles for the component

// Define the Authenticate component
export function Authenticate() {
  // Define state variables to manage user authentication and data
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Is the user currently logged in?
  const [isAdmin, setIsAdmin] = useState(false); // Is the user an admin?
  const [client, setClient] = useState(null); // Information about the logged-in user
  const [error, setError] = useState(""); // Stores error messages

  // Function to check if login credentials are valid
  const isLoginSuccess = (email, password) => {
    // Find a user with matching email and password in the user data
    const user = userData.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // If a matching user is found, set user information and log in
      setIsAdmin(user.isAdmin); // Set admin status
      setClient(user); // Set user data
      setError(""); // Clear any previous error messages
      setIsLoggedIn(true); // Set the user as logged in
    } else {
      // If no matching user is found, display an error message
      setError("Wrong username and password.");
    }
  };

  // Function to log the user out
  const logout = () => {
    // Clear user data and log out
    setIsLoggedIn(false);
    setIsAdmin(false);
    setClient(null);
    setError("");
    localStorage.removeItem('currentUser'); // Remove user data from local storage
  };

  // Check if the user is logged in
  if (isLoggedIn) {
    // If logged in, store the user's data in local storage
    localStorage.setItem('currentUser', JSON.stringify(client));

    if (isAdmin) {
      // If the user is an admin, display the Dashboard component
      return <Dashboard user={client} handleLogout={logout} />;
    } else {
      // If the user is not an admin, display the BudgetApp component
      return <Goals handleLogout={logout} />;
    }
  } else {
    // If not logged in, display the Login component and pass error messages
    return <Login loginHandler={isLoginSuccess} error={error} />;
  }
}
