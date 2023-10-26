import { Link, useMatch, useResolvedPath } from "react-router-dom";
import {userRole} from '../App.jsx'


export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="" alt="" />
        <h1 className="sidebar__logo-text">The Iron Bank of Avion</h1>
      </div>
      {userRole === "admin" ? <AdminSidebar /> : <CustomerSidebar />}
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <a href="">Logout</a>
        </div>
      </div>
    </nav>
  );
}



function AdminSidebar() {
  return (
    <ul className="sidebar__main">
      <CustomLink to="/">Overview</CustomLink>
      <CustomLink to="/create-new-user">Create New User</CustomLink>
      <CustomLink to="/accounts">Accounts</CustomLink>
      <CustomLink to="/deposit">Deposit</CustomLink>
      <CustomLink to="/withdraw">Withdraw</CustomLink>
      <CustomLink to="/send-money">Send Money</CustomLink>
      <CustomLink to="/currency">Currency</CustomLink>
    </ul>
  );
}

function CustomerSidebar() {
  return (
    <ul className="sidebar__main">
      <CustomLink to="/">Overview</CustomLink>
      <CustomLink to="/send-money">Send Money</CustomLink>
      <CustomLink to="/buy-load">Buy Load</CustomLink>
      <CustomLink to="/budget">Budget</CustomLink>
      <CustomLink to="/goals">Goals</CustomLink>
      <CustomLink to="/currency">Currency</CustomLink>
    </ul>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <img className="sidebar__icon" src="" alt="" />
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
