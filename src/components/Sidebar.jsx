function AdminSidebar() {
  return (
    <ul class="sidebar__main">
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/">Overview</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/create-new-user">Create New User</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/accounts">Accounts</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/deposit">Deposit</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/withdraw">Withdraw</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/send-money">Send Money</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/currency">Currency</a>
      </li>
    </ul>
  );
}

function UserSidebar() {
  return (
    <ul class="sidebar__main">
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/">Overview</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/send-money">Send Money</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/buy-load">Buy Load</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/budget">Budget</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/goals">Goals</a>
      </li>
      <li>
        <img class="sidebar__icon" src="" alt="" />
        <a href="/currency">Currency</a>
      </li>
    </ul>
  );
}

export function Sidebar() {
  const sidebarItems = <UserSidebar />;
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="" alt="" />
        <h1 className="sidebar__logo-text">The Iron Bank of Avion</h1>
      </div>
      {sidebarItems}
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <a href="">Logout</a>
        </div>
      </div>
    </nav>
  );
}
