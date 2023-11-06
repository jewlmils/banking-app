import React from "react";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router";

export function DashboardWrapper() {
  return (
   
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <Outlet />
          </div>
        </section>
      </main>
   
  );
}
