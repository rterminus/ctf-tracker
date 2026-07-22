import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <main className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
