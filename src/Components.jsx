export function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="" alt="" />
        <h1 className="sidebar__logo-text">The Iron Bank of Avion</h1>
      </div>
      <UserSidebar />
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
        <UserOverview />
      </div>
    </section>
  );
}

function AdminOverview() {
  return (
    <>
      <h1 className="content-title">Total Money</h1>
      <h1 className="content-amount">$2,000,000</h1>
    </>
  );
}

function AdminSidebar() {
  return (
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
      <li class="sidebar__option">
        <img class="sidebar__icon" src="" alt="" />
        <span>Send Money</span>
      </li>
    </ul>
  );
}

function UserSidebar() {
  return (
    <ul class="sidebar__main">
      <li class="sidebar__option">
        <img class="sidebar__icon" src="" alt="" />
        <span>Overview</span>
      </li>
      <li class="sidebar__option">
        <img class="sidebar__icon" src="" alt="" />
        <span>Send Money</span>
      </li>
      <li class="sidebar__option">
        <img class="sidebar__icon" src="" alt="" />
        <span>Budget</span>
      </li>
      <li class="sidebar__option">
        <img class="sidebar__icon" src="" alt="" />
        <span>Buy Load</span>
      </li>
    </ul>
  );
}

function UserOverview() {
  return (
    <>
      <div className="card-container">
        <span className="card-account-number">123-456-7890</span>
        <span className="card-balance">$ 10000.00</span>
        <span className="card-name">Daenerys Targaryen</span>
        <span className="card-expiration">10/28</span>
      </div>
      <div className="transaction-container">
        <span className="transaction-title">Transaction History</span>
        <div className="transaction-history"></div>
      </div>
    </>
  );
}
