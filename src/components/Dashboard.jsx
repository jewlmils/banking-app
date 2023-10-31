import React from "react";

function Dashboard({user, handleLogout}) {
  return (
    <div className="admin-page">
          <h1> Hello, {user.fullName}!</h1>
          <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export { Dashboard };