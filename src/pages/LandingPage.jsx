export function LandingPage() {
  return (
    <div className="lp-body">
      <div className="lp-navbar">
        <div>
          <img className="lp-logo" src="src/assets/image/iba-logo.png" alt="" />
        </div>
        <nav className="lp-nav-list">
          <a className="nav-link">Service</a>
          <a className="nav-link">Blog</a>
          <a className="nav-link">Support</a>
          <a className="nav-link">About Us</a>
          <a href="/login">
            <button className="nav-link-button">Login</button>
          </a>
        </nav>
      </div>
      <div className="lp-split-screen">
        <div className="lp-left">
          <div className="lp-left-content">
            <h1 className="lp-text">
              Similar to a bank, but <i>Better</i> than anything
            </h1>
            <p className="lp-text2">
              A new solution by creating the best digital bank credit with
              various services available
            </p>
            <a href="/login">
              <button className="lp-gs">
                Get Started
              </button>
            </a>
          </div>
        </div>
        <div className="lp-right"></div>
      </div>
    </div>
  );
}
