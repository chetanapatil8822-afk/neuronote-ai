import { Link } from "react-router-dom";
import {
  FiFileText,
  FiShare2,
  FiTable,
  FiMessageSquare,
  FiLayers,
  FiHelpCircle,
  FiBarChart2,
  FiClock,
} from "react-icons/fi";

function Dashboard() {
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
    <>
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
    </>
  );
}

export default Dashboard;