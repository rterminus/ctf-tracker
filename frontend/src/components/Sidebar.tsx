import { NavLink } from "react-router-dom";

const navItems = [
  { title: "Dashboard", to: "/" },
  { title: "History", to: "/history" },
  { title: "Statistics", to: "/stats" },
];

const Sidebar = () => {
  return (
    <aside className="bg-background border-outline flex w-64 flex-col items-center border-r">
      <div className="border-outline mx-auto w-full border-b p-8">
        <h1 className="text-center text-3xl font-bold">CTF Tracker</h1>
      </div>
      <nav className="text-text-muted flex flex-1 flex-col justify-start gap-4 px-4 py-4 text-xl font-semibold">
        {navItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.to}
            className={({ isActive }) =>
              `flex items-center rounded-4xl px-4 py-3 text-lg font-medium transition-all ${
                isActive
                  ? "bg-primary text-white"
                  : "text-text-muted hover:bg-outline hover:text-white"
              }`
            }
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
