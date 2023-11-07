import { userRole, currentUser, userData } from "../../Data";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { useState, useEffect } from "react";
import {AdminOverview,CustomerOverview} from './components'



export function Overview() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [overviewDisplay, setOverviewDisplay] = useState();
  useEffect(() => {
    setOverviewDisplay(user.isAdmin ? <AdminOverview /> : <CustomerOverview />);
  }, [user.isAdmin]);

  return <>{overviewDisplay}</>;
}



