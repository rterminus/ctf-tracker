const Header = () => {
  return (
    <header className="border-outline mx-auto flex h-24 w-full items-center justify-between border-b p-8 px-6">
      <div className="flex items-center justify-center gap-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
      </div>
      <p className="text-text-muted text-lg">Database Status: Connected</p>
    </header>
  );
};

export default Header;
