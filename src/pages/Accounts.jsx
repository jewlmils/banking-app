import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function Accounts() {
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <h1> Accounts</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
