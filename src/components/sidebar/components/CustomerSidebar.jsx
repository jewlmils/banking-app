import { CustomLink } from "./CustomLink";
import {Layout,Send,DollarSign,TabletSmartphone,Wallet,Goal} from "lucide-react";

export function CustomerSidebar() {
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