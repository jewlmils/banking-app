
import { useState, useEffect } from "react";
import { currentUser } from "../Data";
export function Header() {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [nameDisplay, setNameDisplay] = useState();
  useEffect(() => {
    setNameDisplay(user.fullName);
  }, [user.fullName]);

  return (
    <section className="header">
      <div className="header__user-container">
        <img src="" alt="" />
        <span>Good Day {nameDisplay}!</span>
      </div>
    </section>
  );
}
