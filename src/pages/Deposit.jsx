import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function Deposit() {
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <h1> Deposit</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
