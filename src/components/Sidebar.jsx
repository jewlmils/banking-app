const adminSidebar = ["Overview", "Create New User", "Accounts","Deposit", "Withdraw", "Send Money"];
const userSidebar =["Overview","Send Money","Budget", "Buy Load" ]
  
  
function SidebarItems() {
    let sidebarItems= userSidebar;
    return (
      <ul className="sidebar__main">
        {sidebarItems.map(item => <li className="sidebar__option"><span>{item}</span></li>)}
      </ul>
    );
  }

export function Sidebar() {
    const sidebarItems = []
    return (
      <nav className="sidebar">
        <div className="sidebar__header">
          <img className="sidebar__logo" src="" alt="" />
          <h1 className="sidebar__logo-text">The Iron Bank of Avion</h1>
        </div>
        <SidebarItems/>
        <div className="sidebar__footer">
          <div className="sidebar__footer-container">
            <span>Logout</span>
          </div>
        </div>
      </nav>
    );
}
  
