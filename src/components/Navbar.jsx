function Navbar({ darkMode, setDarkMode }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/10 dark:bg-white/10 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">
          NeuroNote AI
        </h1>

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover transition text-white shadow-lg shadow-primary/30"
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}

export default Navbar;
