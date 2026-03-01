import { useState } from "react";

const dummyUploads = [
  { id: 1, name: "Data Structures.pdf", date: "2026-02-01" },
  { id: 2, name: "Algorithms Notes.pdf", date: "2026-02-05" },
];

const dummyChats = [
  { id: 1, title: "Stack Explanation", date: "2026-02-10" },
  { id: 2, title: "Binary Tree Doubt", date: "2026-02-12" },
];

const dummyQuizzes = [
  { id: 1, score: "8/10", date: "2026-02-15" },
  { id: 2, score: "7/10", date: "2026-02-18" },
];

function History() {
  const [activeTab, setActiveTab] = useState("uploads");

  const renderContent = () => {
    let data = [];

    if (activeTab === "uploads") data = dummyUploads;
    if (activeTab === "chats") data = dummyChats;
    if (activeTab === "quizzes") data = dummyQuizzes;

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse mt-6">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left">
              <th className="p-3">Title</th>
              <th className="p-3">Date</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <td className="p-3 text-gray-800 dark:text-gray-200">
                  {item.name || item.title || item.score}
                </td>
                <td className="p-3 text-gray-600 dark:text-gray-400">
                  {item.date}
                </td>
                <td className="p-3">
                  <button className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:scale-105 transition">
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          History
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          View your past uploads, chats, and quiz attempts
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mt-6">
        {["uploads", "chats", "quizzes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg capitalize transition ${
              activeTab === tab
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 mt-6">
        {renderContent()}
      </div>
    </div>
  );
}

export default History;