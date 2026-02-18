// src/components/Sidebar.jsx
import { BsSun, BsMoon } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar({ darkMode, setDarkMode }) {
  const location = useLocation(); // Active link highlight ke liye

  const navLinks = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Upload", path: "/upload" },
    { name: "Chat", path: "/chat" },
    { name: "Quiz", path: "/quiz" },
    { name: "Analytics", path: "/analytics" },
    { name: "History", path: "/history" },
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between min-h-screen">
      {/* Logo / Title */}
      <div>
        <h2 className="text-2xl font-bold mb-8 tracking-wide">NeuroNote AI</h2>

        {/* Navigation Links */}
        <nav className="space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold"
                  : "text-gray-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Dark / Light Mode Toggle */}
      <button
        className="mt-6 px-4 py-2 flex items-center gap-2 bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded hover:bg-gray-600 dark:hover:bg-gray-300 transition"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? <BsSun /> : <BsMoon />}
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </aside>
  );
}
