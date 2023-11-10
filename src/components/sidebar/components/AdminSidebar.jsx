import { CustomLink } from "./CustomLink";
import {Layout,UserPlus,Contact,PiggyBank,Banknote} from "lucide-react";

export function AdminSidebar() {
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
      </ul>
    );
  }