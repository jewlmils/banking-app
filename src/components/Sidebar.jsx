export function Sidebar() {
  const sidebarDisplay = <AdminSidebar />;
  return (
    <nav className="sidebar">
      <div className="sidebar__header">
        <img className="sidebar__logo" src="" alt="" />
        <h1 className="sidebar__logo-text">The Iron Bank of Avion</h1>
      </div>
      {sidebarDisplay}
      <div className="sidebar__footer">
        <div className="sidebar__footer-container">
          <a href="">Logout</a>
        </div>
      </div>
    </nav>
  );
}

function AdminSidebar() {
  return (
    <ul className="sidebar__main">
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/">Overview</a>
      </li>
      <CustomLink href="/create-new-user">Create New User</CustomLink>
      <CustomLink href="/accounts">Accounts</CustomLink>
      <CustomLink href="/deposit">Deposit</CustomLink>
      <CustomLink href="/withdraw">Withdraw</CustomLink>
      <CustomLink href="/send-money">Send Money</CustomLink>
      <CustomLink href="/currency">Currency</CustomLink>
    </ul>
  );
}

function CustomLink({href, children, ...props}){
  const path = window.location.pathname
  if (path)
  return (
    <li className={path === href ? "active" : ""}>
      {/* <img className="sidebar__icon" src="" alt="" /> */}
      <a href={href}{...props}>{children}</a>
    </li>
  )
}

function UserSidebar() {
  return (
    <ul className="sidebar__main">
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/">Overview</a>
      </li>
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/send-money">Send Money</a>
      </li>
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/buy-load">Buy Load</a>
      </li>
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/budget">Budget</a>
      </li>
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/goals">Goals</a>
      </li>
      <li>
        <img className="sidebar__icon" src="" alt="" />
        <a href="/currency">Currency</a>
      </li>
    </ul>
  );
}
