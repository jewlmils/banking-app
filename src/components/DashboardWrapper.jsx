import React, { useState, useEffect } from "react";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./Header";
import { Outlet } from "react-router";

export function DashboardWrapper() {
  const [showSidebar, setShowSidebar] = useState(true);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth > 851);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="body">
      <Header toggleSidebar={toggleSidebar} />
      <main>
        {showSidebar && <Sidebar />}
        <section className="content">
          <div className="content-container">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}