import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import {
  FiFileText,
  FiShare2,
  FiTable,
  FiMessageSquare,
  FiLayers,
  FiHelpCircle,
  FiBarChart2,
  FiClock,
  FiBell,
  FiSearch,
  FiGrid,
} from "react-icons/fi";

function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navLinks = [
    { name: "Dashboard", path: "/dashboard", icon: <FiGrid /> },
    { name: "Upload", path: "/upload", icon: <FiFileText /> },
    { name: "Mind Map", path: "/mindmap", icon: <FiShare2 /> },
    { name: "Data Tables", path: "/datatables", icon: <FiTable /> },
    { name: "Chat", path: "/chat", icon: <FiMessageSquare /> },
    { name: "Flashcards", path: "/flashcards", icon: <FiLayers /> },
    { name: "Quiz", path: "/quiz", icon: <FiHelpCircle /> },
    { name: "Analytics", path: "/analytics", icon: <FiBarChart2 /> },
    { name: "History", path: "/history", icon: <FiClock /> },
  ];

  return (
    <div className="flex min-h-screen transition-colors duration-500">
      
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8 tracking-wide">
            NeuroNote AI
          </h2>

          <nav className="space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white ${
                  location.pathname === link.path
                    ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold"
                    : "text-gray-300"
                }`}
              >
                <span className="text-lg">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <button
          className="mt-6 px-4 py-2 flex items-center gap-2 bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-lg hover:bg-gray-600 dark:hover:bg-gray-300 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsSun /> : <BsMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500">

        {/* Top Utility Bar */}
        <div className="flex justify-between items-center mb-10">
          
          {/* Search */}
          <div className="relative w-80">
            <FiSearch className="absolute top-3 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search tools..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200 shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <button className="relative text-gray-600 dark:text-gray-300 hover:text-purple-600 transition">
              <FiBell size={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-semibold shadow-md">
              CP
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <Outlet />

      </main>
    </div>
  );
}

export default DashboardLayout;