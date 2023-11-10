import {useNavigate} from "react-router-dom";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { AdminSidebar, CustomerSidebar } from "./components";

export function Sidebar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
  const navigate = useNavigate(); // Initialize navigate hook
  const [sidebarDisplay, setSidebarDisplay] = useState(currentUser && currentUser.isAdmin ? <AdminSidebar /> : <CustomerSidebar />);
  
  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null ;
    let pageStatus = JSON.parse(localStorage.getItem("pageStatus"));
    // Step 2: Find the user
    if (currentUser) {
      const userIndex = userData.findIndex(
        (user) =>
          user.email === currentUser.email &&
          user.password === currentUser.password
      );

      if (userIndex !== -1) {
        // Step 3: Update loginStatus for the user
        userData[userIndex].loginStatus = false;
        pageStatus = false;

        // Step 4: Remove currentUser from local storage
        localStorage.removeItem("currentUser");
        localStorage.setItem("userData", JSON.stringify(userData));
        localStorage.setItem("pageStatus", JSON.stringify(pageStatus));
        console.log("redirecting to login");

        // Use navigate to redirect to the login page
        navigate("/login");
      }
    }
  };

  return (
    <nav className="sidebar">
      <div className="sidebar__header">
       
      </div>
      {sidebarDisplay}
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <a className="logout-button" onClick={handleLogout}>
            <LogOut className="logout-icon" /> Logout
          </a>
        </div>
      </div>
    </nav>
  );
}








