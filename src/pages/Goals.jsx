import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export function Goals() {
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <h1> Goals</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
