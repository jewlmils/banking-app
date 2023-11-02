import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export function CreateUser() {
  return (
    <div className="body">
      <Sidebar />
      <main>
        <Header />
        <section className="content">
          <div className="content-container">
            <h1> Create User</h1>
          </div>
        </section>
      </main>
    </div>
  );
}
