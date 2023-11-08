import {
  Link,
  useMatch,
  useResolvedPath,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import {
  Layout,
  UserPlus,
  Contact,
  PiggyBank,
  Banknote,
  Send,
  DollarSign,
  TabletSmartphone,
  Wallet,
  Goal,
  LogOut,
} from "lucide-react";

export function Sidebar() {
  const navigate = useNavigate(); // Initialize navigate hook

  const handleLogout = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
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

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [sidebarDisplay, setSidebarDisplay] = useState(
    currentUser && currentUser.isAdmin ? <AdminSidebar /> : <CustomerSidebar />
  );

  return (
    <nav className="sidebar">
      <div className="sidebar__header">
       
      </div>
      {sidebarDisplay}
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <a className="logout-button" onClick={handleLogout}>
            <LogOut /> Logout
          </a>
        </div>
      </div>
    </nav>
  );
}

function AdminSidebar() {
  return (
    <ul className="sidebar__main">
      <CustomLink to="/">
        <Layout className="sidebar-icon" /> Overview
      </CustomLink>
      <CustomLink to="/create-new-user">
        <UserPlus className="sidebar-icon" /> Create User
      </CustomLink>
      <CustomLink to="/accounts">
        <Contact className="sidebar-icon" /> Accounts
      </CustomLink>
      <CustomLink to="/deposit">
        <PiggyBank className="sidebar-icon" /> Deposit
      </CustomLink>
      <CustomLink to="/withdraw">
        <Banknote className="sidebar-icon" /> Withdraw
      </CustomLink>
      <CustomLink to="/send-money">
        <Send className="sidebar-icon" /> Send Money
      </CustomLink>
      <CustomLink to="/currency">
        <DollarSign className="sidebar-icon" /> Currency
      </CustomLink>
    </ul>
  );
}

function CustomerSidebar() {
  return (
    <ul className="sidebar__main">
      <CustomLink to="/">
        <Layout className="sidebar-icon" /> Overview
      </CustomLink>
      <CustomLink to="/send-money">
        <Send className="sidebar-icon" /> Send Money
      </CustomLink>
      <CustomLink to="/buy-load">
        <TabletSmartphone className="sidebar-icon" /> Buy Load
      </CustomLink>
      <CustomLink to="/budget">
        <Wallet className="sidebar-icon" /> Budget
      </CustomLink>
      <CustomLink to="/goals">
        <Goal className="sidebar-icon" /> Goals
      </CustomLink>
      <CustomLink to="/currency">
        <DollarSign className="sidebar-icon" /> Currency
      </CustomLink>
    </ul>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "custom-link"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
