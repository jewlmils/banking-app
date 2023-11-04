import { currentUser } from "../Data";



export function Header() {
    return (
      <section className="header">
        <div className="header__user-container">
          <img src="" alt="" />
          <span>Good Day {currentUser.fullName}!</span>
        </div>
      </section>
    );
}
  