import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import image2 from '../assets/image/iba-logo.png'

export function Header({ toggleSidebar }) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const [nameDisplay, setNameDisplay] = useState();

  useEffect(() => {
    setNameDisplay(user.fullName);
  }, [user.fullName]);

  return (
    <section className="header">
      <Menu className="header__burger-btn" onClick={toggleSidebar} />
      <img
        className="header__logo"
        src={image2}
        alt="IBA-logo"
      />
      <div className="header__user-container">
        <img src="" alt="" />
        <span>
          Good Day, <span className="header-name">{nameDisplay}</span>!
        </span>
      </div>
    </section>
  );
}