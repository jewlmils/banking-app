export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="" alt="" />
        <h1 className="sidebar__logo-text">The Iron Bank of Avion</h1>
      </div>
      <ul className="sidebar__main">
        <li className="sidebar__option">
          <img className="sidebar__icon" src="" alt="" />
          <span>Overview</span>
        </li>
        <li className="sidebar__option">
          <img className="sidebar__icon" src="" alt="" />
          <span>Create New User</span>
        </li>
        <li className="sidebar__option">
          <img className="sidebar__icon" src="" alt="" />
          <span>Accounts</span>
        </li>
        <li className="sidebar__option">
          <img className="sidebar__icon" src="" alt="" />
          <span>Deposit</span>
        </li>
        <li className="sidebar__option">
          <img className="sidebar__icon" src="" alt="" />
          <span>Withdraw</span>
        </li>
      </ul>
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <span>Logout</span>
        </div>
      </div>
    </nav>
  );
}

export function Header() {
  return (
    <section class="header">
      <div class="header__user-container">
        <img src="" alt="" />
        <span>User</span>
      </div>
    </section>
  );
}

export function Content() {
    return (
      <section class="content">
        <div class="content-container">
          <h1 class="content-title">Total Money</h1>
          <h1 class="content-amount">$2,000,000</h1>
        </div>
      </section>
    );
  }
  