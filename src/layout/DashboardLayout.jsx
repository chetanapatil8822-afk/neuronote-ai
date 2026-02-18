import { useState, useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

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
    { name: "Dashboard", path: "/dashboard" },
    { name: "Upload", path: "/upload" },
    { name: "Chat", path: "/chat" },
    { name: "Quiz", path: "/quiz" },
    { name: "Analytics", path: "/analytics" },
    { name: "History", path: "/history" },
  ];

  const featureCards = [
    {
      title: "PDF Upload & AI Summary",
      desc: "Upload PDFs and get automatic AI-generated summaries.",
      path: "/upload",
    },
    {
      title: "AI Chat with Document",
      desc: "Interact with your documents using smart AI chat.",
      path: "/chat",
    },
    {
      title: "Quiz Generation",
      desc: "Create quizzes from your documents automatically.",
      path: "/quiz",
    },
    {
      title: "Performance Analytics",
      desc: "Track your learning performance and progress.",
      path: "/analytics",
    },
    {
      title: "History",
      desc: "Review your past uploads, chats, and quiz results.",
      path: "/history",
    },
  ];

  return (
    <div className="flex min-h-screen transition-colors duration-500">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 flex flex-col justify-between shadow-lg">
        <div>
          <h2 className="text-2xl font-bold mb-8 tracking-wide">NeuroNote AI</h2>
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

        <button
          className="mt-6 px-4 py-2 flex items-center gap-2 bg-gray-700 dark:bg-gray-200 text-white dark:text-black rounded-lg hover:bg-gray-600 dark:hover:bg-gray-300 transition"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <BsSun /> : <BsMoon />}
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-100 dark:bg-gray-950 transition-colors duration-500">
        <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to Dashboard
        </h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300">
          Your AI-powered summary, quizzes, and analytics in one place.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              to={card.path}
              className="p-6 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transform transition-all duration-300"
            >
              <h2 className="text-xl font-semibold mb-2 text-white">{card.title}</h2>
              <p className="text-gray-300">{card.desc}</p>
            </Link>
          ))}
        </div>

        <div className="mt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;
