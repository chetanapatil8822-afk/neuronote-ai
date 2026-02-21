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

  const featureSections = [
    {
      title: "📂 Document Tools",
      features: [
        {
          title: "PDF Upload & AI Summary",
          desc: "Upload PDFs and get automatic AI-generated summaries.",
          path: "/upload",
          icon: <FiFileText size={28} />,
          primary: true,
        },
        {
          title: "Mind Map Generator",
          desc: "Visualize document concepts in structured mind map format.",
          path: "/mindmap",
          icon: <FiShare2 size={24} />,
        },
        {
          title: "Structured Data Tables",
          desc: "Convert document information into organized data tables.",
          path: "/datatables",
          icon: <FiTable size={24} />,
        },
      ],
    },
    {
      title: "🧠 Learning Tools",
      features: [
        {
          title: "AI Chat with Document",
          desc: "Interact with your documents using smart AI chat.",
          path: "/chat",
          icon: <FiMessageSquare size={24} />,
        },
        {
          title: "Flashcards",
          desc: "Generate smart flashcards from your documents for quick revision.",
          path: "/flashcards",
          icon: <FiLayers size={24} />,
        },
        {
          title: "Quiz Generation",
          desc: "Create quizzes from your documents automatically.",
          path: "/quiz",
          icon: <FiHelpCircle size={24} />,
        },
      ],
    },
    {
      title: "📈 Insights",
      features: [
        {
          title: "Performance Analytics",
          desc: "Track your learning performance and progress.",
          path: "/analytics",
          icon: <FiBarChart2 size={24} />,
        },
        {
          title: "History",
          desc: "Review your past uploads, chats, and quiz results.",
          path: "/history",
          icon: <FiClock size={24} />,
        },
      ],
    },
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

        {/* ✅ NEW TOP UTILITY BAR */}
        <div className="flex justify-between items-center mb-8">
          
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

        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
          Welcome to Dashboard
        </h1>
        <p className="mb-10 text-gray-700 dark:text-gray-300">
          Your AI-powered summary, quizzes, and analytics in one place.
        </p>

        {featureSections.map((section) => (
          <div key={section.title} className="mb-14">
            <h2 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">
              {section.title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.features.map((card) => (
                <Link
                  key={card.title}
                  to={card.path}
                  className={`rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] ${
                    card.primary
                      ? "p-8 bg-gradient-to-br from-purple-600 to-blue-600 text-white shadow-xl ring-2 ring-purple-400 hover:shadow-[0_20px_50px_rgba(124,58,237,0.5)]"
                      : "p-8 bg-gray-800 dark:bg-gray-900 shadow-lg hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                  }`}
                >
                  <div
                    className={`mb-4 ${
                      card.primary ? "text-white" : "text-purple-400"
                    }`}
                  >
                    {card.icon}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {card.title}
                  </h3>

                  <p
                    className={`text-sm ${
                      card.primary ? "text-gray-100" : "text-gray-300"
                    }`}
                  >
                    {card.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;