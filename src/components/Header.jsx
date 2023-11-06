import { useState } from "react";
import { currentUser } from "../Data";

export function Header() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser") || "null");
  return (
    <section className="header">
      <div className="header__user-container">
        <img src="" alt="" />
        <span>Good Day {currentUser && currentUser.fullName}!</span>
      </div>
    </section>
  );
}
